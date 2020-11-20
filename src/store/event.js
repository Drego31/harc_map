import { arrayUtils } from 'utils/array';
import { uCheck } from '@dbetka/utils';
import moment from 'moment';
import { MACROS } from 'utils/macros';

export default {
  namespaced: true,
  state: {
    eventId: '',
    name: '',
    mapDefaultPosition: {
      latitude: 0,
      longitude: 0,
    },
    mapDefaultZoom: 2,
    mapPosition: {
      latitude: 0,
      longitude: 0,
    },
    mapZoom: 2,
    points: [],
    categories: [],
  },
  getters: {
    event: state => state,
    name: state => state.name,
    eventId: state => state.eventId,
    getPointById: state => pointId => {
      return state.points.find(point => point.pointId === pointId);
    },
    getCategoryById: state => categoryId => {
      return state.categories.find(category => category.categoryId === categoryId);
    },
    categories: state => state.categories,
    getTemporaryPoints: state => state.points
      .filter(point => point.pointType === MACROS.pointType.temporary)
      .sort((pA, pB) => pA.pointExpirationTime - pB.pointExpirationTime),

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

          // Display points collected by user
          if (rootGetters['user/collectedPointsIds'].includes(pointId) === true) return true;

          // Point is permanent and collected, but user don't know it to next gap time
          // Gap time = Last quarter of an hour from now example .00, .15, .30, .45
          const now = moment();
          const lastGapEndTime = moment(now).minutes((now.minute() - (now.minute() % 15))).seconds(0);
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
  },
  mutations: {
    setEvent: (state, data) => {
      Object.assign(state, { ...data });
      state.mapDefaultPosition = { ...data.mapPosition };
      state.mapDefaultZoom = data.mapZoom;
    },
    setDefaultMapPositionAndZoom: (state) => {
      state.mapPosition = { ...state.mapDefaultPosition };
      state.mapZoom = state.mapDefaultZoom;
    },
    setId: (state, payload) => (state.eventId = payload),
    updatePoint: (state, data) => {
      const point = state.points.find(item => item.pointId === data.pointId);
      Object.assign(point, data);
    },
    updateListOfPoints: (state, list = []) => {
      for (const newPoint of list) {
        const point = state.points.find(item => item.pointId === newPoint.pointId);
        Object.assign(point, newPoint);
      }
    },
    removePoint: (state, point) => {
      arrayUtils.removeItem(state.points, point);
    },
    setMapPosition: (state, mapPosition) => {
      state.mapPosition = mapPosition;
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
  },
};
