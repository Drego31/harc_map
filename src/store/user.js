export default {
  namespaced: true,
  state: {
    email: '',
    teamName: '',
    score: 0,
  },
  getters: {
    email: state => state.email,
    teamName: state => state.teamName,
    isLogin: state => state.email !== '',
    score: state => state.score,
  },
  mutations: {
    setEmail: (state, payload) => (state.email = payload),
    setTeamName: (state, payload) => (state.teamName = payload),
    setScore: (state, payload) => (state.score = payload),
    signOut: state => {
      state.email = ''
      state.teamName = ''
      state.score = 0
    },
  },
  actions: {},
}
