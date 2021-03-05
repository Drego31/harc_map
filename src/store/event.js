import { uCheck } from '@dbetka/utils';
import moment from 'moment';
import { MACROS } from 'utils/macros';
import Vue from 'vue';
import Cookies from 'js-cookie';
import pointsModule from 'store/event/points';

export default {
  namespaced: true,
  modules: {
    pointsModule,
  },
  state: {
    eventId: '',
    eventName: '',
    mapLongitude: 0,
    mapLatitude: 0,
    mapDefaultLongitude: 0,
    mapDefaultLatitude: 0,
    mapZoom: 2,
    mapDefaultZoom: 2,
    mapRefreshTime: 60,
    points: [],
    categories: [],
  },
  getters: {
    event: state => state,
    eventName: state => state.eventName,
    eventId: state => state.eventId,
    mapPosition: state => ({
      mapLongitude: state.mapLongitude,
      mapLatitude: state.mapLatitude,
      mapZoom: state.mapZoom,
    }),
    mapDefaultPosition: state => ({
      mapDefaultLongitude: state.mapDefaultLongitude,
      mapDefaultLatitude: state.mapDefaultLatitude,
      mapDefaultZoom: state.mapDefaultZoom,
    }),
    points: state => state.points,
    getPointById: state => pointId => {
      return state.points.find(point => point.pointId === pointId);
    },
    getPointByOlUid: state => pointOlUid => {
      return state.points.find(point => point.olUid === pointOlUid);
    },
    getCategoryById: state => categoryId => {
      return state.categories.find(category => category.categoryId === categoryId);
    },
    categories: state => state.categories,
    getTemporaryPoints: state => state.points
      .filter(point => point.pointType === MACROS.pointType.temporary)
      .sort((pA, pB) => pA.pointExpirationTime - pB.pointExpirationTime),
    allCollectedPoints: state => state.points
      .filter(point => point.pointCollectionTime !== null),
    getPointsVisibleOnMap: (state, getters, rootState, rootGetters) => {
      return state.points.filter(({
        pointId,
        pointCollectionTime,
        pointType,
        pointExpirationTime,
      }) => {
        if (pointType === MACROS.pointType.permanent) {
          // Point is not collected
          if (uCheck.isNull(pointCollectionTime)) return true;
          if (permissions.checkIsAdmin()) return true;

          // Display points collected by user
          if (rootGetters['user/collectedPointsIds'].includes(pointId) === true) return true;

          // Point is permanent and collected, but user don't know it to next gap time
          // Gap time is last full time from mapRefreshTime counting from full hours
          const mapRefreshTimeInMinutes = state.mapRefreshTime / 60;
          const now = moment();
          const lastGapEndTime = moment(now).minutes((now.minute() - (now.minute() % mapRefreshTimeInMinutes))).seconds(0);
          const isBeforeLastGapEndTime = moment(pointCollectionTime).isBefore(lastGapEndTime);
          return isBeforeLastGapEndTime === false;
        }

        // Point is temporary - should be visible in interval => pointExpirationTime +/- time range
        const timeRange = 1000 * 60 * 60; // 1H
        const expirationTime = moment((new Date(pointExpirationTime)).valueOf());
        const expirationTimeDiffNow = expirationTime.diff(moment());
        return expirationTimeDiffNow > 0 && expirationTimeDiffNow < timeRange;
      });
    },
    eventBasicInformation: (state) => ({
      eventId: state.eventId,
      eventName: state.eventName,
      mapZoom: state.mapZoom,
      mapLongitude: state.mapLongitude,
      mapLatitude: state.mapLatitude,
      mapRefreshTime: state.mapRefreshTime,
    }),
  },
  mutations: {
    setEvent: (state, data) => {
      Object.assign(state, { ...data });
      state.mapDefaultLatitude = data.mapLatitude;
      state.mapDefaultLongitude = data.mapLongitude;
      state.mapDefaultZoom = data.mapZoom;
      const cookieJSON = Cookies.get('mapPosition');
      if (cookieJSON) {
        const cookie = JSON.parse(cookieJSON);
        state.mapLatitude = cookie.mapLatitude;
        state.mapLongitude = cookie.mapLongitude;
        state.mapZoom = cookie.mapZoom;
      }
    },
    setDefaultMapPositionAndZoom: (state) => {
      state.mapLatitude = state.mapDefaultLatitude;
      state.mapLongitude = state.mapDefaultLongitude;
      state.mapZoom = state.mapDefaultZoom;
    },
    setId: (state, payload) => (state.eventId = payload),
    updatePoint: (state, data) => {
      let arrayPointId = null;
      const point = state.points.find((item, id) => {
        arrayPointId = id;
        return item.pointId === data.pointId;
      });
      Vue.set(state.points, arrayPointId, Object.assign({}, point, data));
    },
    updateListOfPoints: (state, list = []) => {
      for (const newPoint of list) {
        let arrayPointId = null;
        const point = state.points.find((item, id) => {
          arrayPointId = id;
          return item.pointId === newPoint.pointId;
        });
        Vue.set(state.points, arrayPointId, Object.assign({}, point, newPoint));
      }
    },
    removePoint: (state, point) => {
      Vue.delete(state.points, state.points.indexOf(point));
    },
    setMapPosition: (state, { mapLatitude, mapLongitude }) => {
      console.trace();
      state.mapLatitude = mapLatitude;
      state.mapLongitude = mapLongitude;
    },
    setMapZoom: (state, mapZoom) => {
      state.mapZoom = mapZoom;
    },
  },
  actions: {
    download (context, eventId = context.state.eventId) {
      return new Promise((resolve, reject) => {
        let event;
        api.getEventById({ eventId })
          .then(data => (event = data))
          .then(api.getCategoriesByEventId)
          .then(categories => {
            event.categories = categories;
            return event;
          })
          .then(api.getPointsByEventId)
          .then(points => {
            event.points = points.map(point => ({ ...point }));
            context.commit('setEvent', event);
            resolve(event);
          })
          .catch(reject);
      });
    },
    collectPoint (context, pointId) {
      return new Promise((resolve, reject) => {
        api.collectPoint({
          eventId: context.getters.eventId,
          user: context.rootGetters['user/user'],
          pointId,
        })
          .then(() => {
            context.commit('updatePoint', {
              pointId,
              pointCollectionTime: Date.now(),
            });
            context.commit('user/addCollectedPointId', pointId, { root: true });
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    updateEvent (context, updatedEvent = context.getters.eventBasicInformation) {
      return new Promise((resolve, reject) => {
        api.updateEvent(updatedEvent)
          .then(api.getEventById)
          .then(eventData => context.commit('setEvent', eventData))
          .then(resolve)
          .catch(reject);
      });
    },
  },
};
