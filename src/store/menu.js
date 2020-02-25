export default {
  namespaced: true,
  state: {
    isOpen: false,
  },
  getters: {
    isOpen: state => state.isOpen,
  },
  mutations: {
    toggle: state => (state.isOpen = !state.isOpen),
    open: state => (state.isOpen = true),
    close: state => (state.isOpen = false),
  },
  actions: {},
};
