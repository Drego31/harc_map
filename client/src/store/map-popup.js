export default {
  namespaced: true,
  state: {
    // Example: [{icon: '', value: ''}]
    data: [],
    pointId: '',
  },
  getters: {
    data: state => state.data,
    pointId: state => state.pointId,
  },
  mutations: {
    setData: (state, payload) => (state.data = payload),
    setPointId: (state, payload) => (state.pointId = payload),
  },
};
