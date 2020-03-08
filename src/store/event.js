import { AppEvent } from 'src/structures/app-event';
import { arrayUtils } from 'utils/array';

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
    event: state => new AppEvent(state),
    eventId: state => state.eventId,
    getPointById: state => pointId => {
      return state.points.find(point => point.pointId === pointId);
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
    removePoint: (state, point) => {
      arrayUtils.removeItem(state.points, point);
    },
  },
  actions: {
    download (context, eventId = context.state.eventId) {
      return new Promise(resolve => {
        api.getEventById(eventId)
          .then(data => {
            data.points = data.points.map(point => ({ ...point }));
            context.commit('setEvent', data);
            resolve(data);
          });
      });
    },
  },
};
