export default {
  namespaced: true,
  state: {
    email: '',
    teamName: '',
  },
  getters: {
    email: state => state.email,
    teamName: state => state.teamName,
    isLoggin: state => state.email !== '',
  },
  mutations: {
    email: (state, payload) => (state.email = payload),
    teamName: (state, payload) => (state.teamName = payload),
  },
  actions: {
  },
}
