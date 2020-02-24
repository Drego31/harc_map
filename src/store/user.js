export default {
  namespaced: true,
  state: {
    email: '',
    teamName: '',
    collectedPointsIds: [],
  },
  getters: {
    email: state => state.email,
    teamName: state => state.teamName,
    isLogin: state => state.email !== '',
    collectedPointsIds: state => state.collectedPointsIds,
  },
  mutations: {
    setEmail: (state, payload) => (state.email = payload),
    setTeamName: (state, payload) => (state.teamName = payload),
    setCollectedPointsIds: (state, payload) => (state.collectedPointsIds = payload),
    addCollectedPointId: (state, payload) => (state.collectedPointsIds.push(payload)),
    signOut: state => {
      state.email = ''
      state.teamName = ''
      state.collectedPointsIds = []
    },
  },
  actions: {},
}
