import { arrayUtils } from 'utils/array';
import { uCheck } from '@dbetka/utils';
import moment from 'moment';

export default {
  namespaced: true,
  state: {
    eventId: '',
    name: '',
    mapPosition: {
      latitude: 0,
      longitude: 0,
    },
    mapZoom: 2,
    points: [],
  },
  getters: {
    event: state => state,
    name: state => state.name,
    eventId: state => state.eventId,
    getPointById: state => pointId => {
      return state.points.find(point => point.pointId === pointId);
    },
    notCollectedPoints: (state, getters, rootState, rootGetters) => {
      return state.points.filter(point => {
        const now = moment();
        const lastGapTime = moment(now).minutes((now.minute() - (now.minute() % 15))).seconds(0);

        const collectionTimeIsNull = uCheck.isNull(point.pointCollectionTime);
        const isFromThisTimeGap = moment(point.pointCollectionTime).isBefore(lastGapTime);
        const isNotMyCollectedPoint = rootGetters['user/collectedPointsIds'].includes(point.pointId) === false;

        return (collectionTimeIsNull || isFromThisTimeGap) && isNotMyCollectedPoint;
      });
    },
  },
  mutations: {
    setEvent: (state, data) => {
      Object.assign(state, { ...data });
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
  },
  actions: {
    download (context, eventId = context.state.eventId) {
      return new Promise(resolve => {
        let event;
        api.getEventById(eventId)
          .then(data => (event = data))
          .then(api.getPointsByEventId)
          .then(points => {
            event.points = points.map(point => ({ ...point }));
            context.commit('setEvent', event);
            resolve(event);
          });
      });
    },
  },
};
