export default {
  namespaced: true,
  state: {
    isOpen: false,
  },
  getters: {
    isOpen: state => state.isOpen,
  },
  mutations: {
    open: (state) => (state.isOpen = true),
    close: (state) => (state.isOpen = false),
    toggle: (state) => (state.isOpen = state.isOpen === false),
  },
  actions: {
  },
};
