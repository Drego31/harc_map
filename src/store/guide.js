export default {
  namespaced: true,
  state: {
    isOpen: true,
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
