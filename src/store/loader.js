export default {
  namespaced: true,
  state: {
    isLoading: true,
  },
  getters: {
    isLoading: state => state.isLoading,
  },
  mutations: {
    setIsLoading: (state, payload) => (state.isLoading = payload),
  },
  actions: {},
};
