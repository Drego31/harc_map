export default {
  namespaced: true,
  state: {
    isOpen: false,
    pageTitle: '',
  },
  getters: {
    isOpen: state => state.isOpen,
    pageTitle: state => state.pageTitle,

  },
  mutations: {
    toggle: state => (state.isOpen = !state.isOpen),
    open: state => (state.isOpen = true),
    close: state => (state.isOpen = false),
    setPageTitle: (state, payload) => (state.pageTitle = payload),
  },
  actions: {},
};
