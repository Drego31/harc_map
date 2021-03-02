export default {
  namespaced: true,
  state: {
    // Example: [{icon: '', value: ''}]
    data: [],
  },
  getters: {
    data: state => state.data,
  },
  mutations: {
    setData: (state, payload) => (state.data = payload),
  },
};
