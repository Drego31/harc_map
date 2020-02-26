import { AppEvent } from 'src/structures/app-event';

export default {
  namespaced: true,
  state: {
    eventId: '',
    name: '',
    defaultPosition: {
      latitude: 0,
      longitude: 0,
    },
    defaultZoom: 2,
    points: [],
  },
  getters: {
    event: state => new AppEvent(state),
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
