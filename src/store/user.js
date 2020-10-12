import { uCheck } from '@dbetka/utils';
import { autoUpdate } from 'utils/auto-update';

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
    collectedPoints (state, getters, rootState, rootGetters) {
      const collectedPoints = [];

      for (const pointId of getters.collectedPointsIds) {
        const point = rootGetters['event/getPointById'](pointId);

        uCheck.isDefined(point) ? collectedPoints.push(point) : undefined;
      }
      return collectedPoints;
    },
    sumOfCollectedPoints (state, getters, rootState, rootGetters) {
      return getters.collectedPoints
        .map(point => {
          return rootGetters['event/getCategoryById'](point.pointCategory).pointValue;
        })
        .reduce((a, b) => a + b, 0);
    },
  },
  mutations: {
    setUser: (state, payload) => (state.user = payload),
    setUserTeam: (state, payload) => (state.userTeam = payload),
    setCollectedPointsIds: (state, payload) => (state.collectedPointsIds = payload || []),
    addCollectedPointId: (state, payload) => (state.collectedPointsIds.push(payload)),
    signOut: state => {
      state.user = '';
      state.userTeam = '';
      state.collectedPointsIds = [];
      autoUpdate.stop();
    },
  },
  actions: {
    signIn (context, { eventId, user, collectedPointsIds, userTeam }) {
      return new Promise((resolve, reject) => {
        context.commit('event/setId', eventId, { root: true });
        context.commit('setUser', user);
        context.commit('setCollectedPointsIds', collectedPointsIds);
        context.commit('setUserTeam', userTeam);
        context.dispatch('event/download', undefined, { root: true })
          .then(() => {
            autoUpdate.run();
            resolve();
          })
          .catch(error => reject(error));
      });
    },
  },
};
