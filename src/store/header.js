export default {
  namespaced: true,
  state: {
    pageTitle: '',
    backRouteName: '',
  },
  getters: {
    pageTitle: state => state.pageTitle,
    backRouteName: state => state.backRouteName,
  },
  mutations: {
    setPageTitle: (state, payload = '') => (state.pageTitle = payload),
    setBackRouteName: (state, payload = '') => (state.backRouteName = payload),
  },
  actions: {},
};
