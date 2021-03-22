import { uCheck } from '@dbetka/utils';
import moment from 'moment';
import { MACROS } from 'utils/macros';
import Vue from 'vue';
import { map } from 'map';
import Cookies from 'js-cookie';
import pointsModule from 'store/event/points';
import { eventUtils } from 'utils/event';

export default {
  namespaced: true,
  modules: {
    pointsModule,
  },
  state: {
    eventId: '',
    eventName: '',
    eventStartDate: null,
    eventEndDate: null,
    mapLongitude: 0,
    mapLatitude: 0,
    mapDefaultLongitude: 0,
    mapDefaultLatitude: 0,
    mapZoom: 2,
    mapDefaultZoom: 2,
    mapRefreshTime: 60,
    points: [],
    categories: [],
    hidePoint: {},
  },
  getters: {
    event: state => state,
    eventName: state => state.eventName,
    eventStartDate: state => state.eventStartDate,
    eventEndDate: state => state.eventEndDate,
    mapRefreshTime: state => state.mapRefreshTime,
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
    hidePoint: state => state.hidePoint,
    points: state => state.points,
    getPointById: state => pointId => {
      return state.points.find(point => point.pointId === pointId);
    },
    getPointPositionById: state => pointId => {
      const point = state.points.find(point => point.pointId === pointId);
      return {
        pointLatitude: point.pointLatitude,
        pointLongitude: point.pointLongitude,
      };
    },
    getPointByOlUid: state => pointOlUid => {
      return state.points.find(point => point.olUid === pointOlUid);
    },
    getCategoryById: state => categoryId => {
      return state.categories.find(category => category.categoryId === categoryId);
    },
    categories: state => state.categories,
    permanentCategories: state => state.categories
      .filter(category => category.pointType === MACROS.pointType.permanent),
    timeoutCategories: state => state.categories
      .filter(category => category.pointType === MACROS.pointType.timeout),
    getTemporaryPoints: state => state.points
      .filter(point => point.pointType === MACROS.pointType.timeout)
      .sort((pA, pB) => pA.pointExpirationTime - pB.pointExpirationTime),
    allCollectedPoints: state => state.points
      .filter(point => point.pointCollectionTime !== null),

    pointsVisibleOnMap: (state, getters, rootState, rootGetters) => {
      return state.points.filter(({
        pointId,
        pointCollectionTime,
        pointType,
        pointAppearanceTime,
        pointExpirationTime,
      }) => {
        // Hide if it's hide point
        if (pointId === getters.hidePoint.pointId) return false;

        // Admin can see all points on map
        if (permissions.checkIsAdmin()) return true;

        if (pointType === MACROS.pointType.permanent) {
          // Point is not collected
          if (uCheck.isNull(pointCollectionTime)) return true;

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

        return rootGetters['event/checkTemporaryPointIsVisible']({
          pointAppearanceTime,
          pointExpirationTime,
        });
      });
    },
    eventBasicInformation: (state) => ({
      eventId: state.eventId,
      eventName: state.eventName,
      eventStartDate: state.eventStartDate,
      eventEndDate: state.eventEndDate,
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
    addPoint: (state, point) => state.points.push(point),
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
      state.mapLatitude = mapLatitude;
      state.mapLongitude = mapLongitude;
    },
    setMapZoom: (state, mapZoom) => (state.mapZoom = mapZoom),
    setHidePoint: (state, payload) => (state.hidePoint = payload),
    clearHidePoint: (state) => (state.hidePoint = {}),
  },
  actions: {
    download (context, eventId = context.state.eventId) {
      return new Promise((resolve, reject) => {
        let event;
        api.getEventById({ eventId })
          .then(data => (event = data))
          .then(api.getCategoriesByEventId)
          .then(categories => (event.categories = categories))
          .then(() => {
            const IsBeforeStart = eventUtils.checkIfIsBeforeStart(event);
            const IsCommonUser = permissions.checkIsCommon();
            if (IsBeforeStart && IsCommonUser) return [];
            else return api.getPointsByEventId(event);
          })
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
    addPoint (context, { point, eventId = context.getters.eventId }) {
      return new Promise((resolve, reject) => {
        api.addPoint({ point, eventId })
          .then(() => map.updateMapFeatures())
          .then(() => resolve())
          .catch(reject);
      });
    },
    editPoint (context, { point, eventId = context.getters.eventId }) {
      return new Promise((resolve, reject) => {
        api.editPoint({ point, eventId })
          .then(() => map.updateMapFeatures())
          .then(() => resolve())
          .catch(reject);
      });
    },
    updateEvent (context, updatedEvent = context.getters.eventBasicInformation) {
      return new Promise((resolve, reject) => {
        api.updateEvent(updatedEvent)
          .then(() => map.updateMapFeatures())
          .then(() => resolve())
          .catch(reject);
      });
    },
  },
};
