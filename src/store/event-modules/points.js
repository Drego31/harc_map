import { map } from 'map';
import Vue from 'vue';
import { MACROS } from 'utils/macros';

export default {
  state: {
    points: [],
    hidePoint: {},
  },
  getters: {
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
    pointValueByPointCategory: (state, getters, rootState, rootGetters) => pointCategory => {
      const category = rootGetters['event/getCategoryById'](pointCategory);
      return (category || {}).pointValue;
    },
    getPointByOlUid: state => pointOlUid => {
      return state.points.find(point => point.olUid === pointOlUid);

    },
    getTimeoutPoints: state => state.points
      .filter(point => point.pointType === MACROS.pointType.timeout)
      .sort((pA, pB) => pA.pointExpirationTime - pB.pointExpirationTime),

    allCollectedPoints: state => state.points
      .filter(point => point.pointCollectionTime !== null),

    checkTimeoutPointIsVisible: () => ({ pointAppearanceTime, pointExpirationTime }) => {
      const now = (new Date()).getTime();
      return pointAppearanceTime < now && now < pointExpirationTime;
    },
  },
  mutations: {
    addPoint: (state, point) => state.points.push(point),
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
    setHidePoint: (state, payload) => (state.hidePoint = payload),
    clearHidePoint: (state) => (state.hidePoint = {}),
  },
  actions: {
    removePoint (context, pointId) {
      return new Promise((resolve, reject) => {
        api.removePoint({ pointId, eventId: context.getters['event/eventId'] })
          .then(() => map.updateMapFeatures())
          .then(() => resolve())
          .catch(reject);
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
  },
};
