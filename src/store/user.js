export default {
  namespaced: true,
  state: {
    user: '',
    teamName: '',
    collectedPointsIds: [],
  },
  getters: {
    user: state => state.user,
    teamName: state => state.teamName,
    isLogin: state => state.user !== '',
    collectedPointsIds: state => state.collectedPointsIds,
  },
  mutations: {
    setUser: (state, payload) => (state.user = payload),
    setTeamName: (state, payload) => (state.teamName = payload),
    setCollectedPointsIds: (state, payload) => (state.collectedPointsIds = payload),
    addCollectedPointId: (state, payload) => (state.collectedPointsIds.push(payload)),
    signOut: state => {
      state.user = '';
      state.teamName = '';
      state.collectedPointsIds = [];
    },
  },
  actions: {},
};
