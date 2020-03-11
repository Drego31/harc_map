export default {
  namespaced: true,
  state: {
    user: '',
    userTeam: '',
    collectedPointsIds: [],
  },
  getters: {
    user: state => state.user,
    userTeam: state => state.userTeam,
    isLogin: state => state.user !== '',
    collectedPointsIds: state => state.collectedPointsIds,
  },
  mutations: {
    setUser: (state, payload) => (state.user = payload),
    setUserTeam: (state, payload) => (state.userTeam = payload),
    setCollectedPointsIds: (state, payload) => (state.collectedPointsIds = payload),
    addCollectedPointId: (state, payload) => (state.collectedPointsIds.push(payload)),
    signOut: state => {
      state.user = '';
      state.userTeam = '';
      state.collectedPointsIds = [];
    },
  },
  actions: {},
};
