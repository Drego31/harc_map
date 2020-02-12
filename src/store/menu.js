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
  },
  actions: {
  },
}
