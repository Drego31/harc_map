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
    setEmail: (state, payload) => (state.email = payload),
    setTeamName: (state, payload) => (state.teamName = payload),
  },
  actions: {
  },
}
