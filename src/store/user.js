export default {
  namespaced: true,
  state: {
    user: '',
    userTeam: '',
    collectedPointsIds: [],
    valueChanged: false,
  },
  getters: {
    user: state => state.user,
    userTeam: state => state.userTeam,
    isLogin: state => state.user !== '',
    collectedPointsIds: state => state.collectedPointsIds,
    valueChanged: state => state.valueChanged,
  },
  mutations: {
    setUser: (state, payload) => (state.user = payload),
    setUserTeam: (state, payload) => (state.userTeam = payload),
    setCollectedPointsIds: (state, payload) => (state.collectedPointsIds = payload),
    addCollectedPointId: (state, payload) => (state.collectedPointsIds.push(payload)),
    setValueChanged: (state, payload) => (state.valueChanged = payload),
    signOut: state => {
      state.user = '';
      state.userTeam = '';
      state.collectedPointsIds = [];
    },
  },
  actions: {},
};
