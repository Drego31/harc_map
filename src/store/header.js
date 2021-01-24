export default {
  namespaced: true,
  state: {
    pageTitle: '',
  },
  getters: {
    pageTitle: state => state.pageTitle,
  },
  mutations: {
    setPageTitle: (state, payload = '') => (state.pageTitle = payload),
  },
  actions: {},
};
