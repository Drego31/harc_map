import { uCheck } from '@dbetka/utils';
import { autoUpdate } from 'utils/auto-update';
import { ACCOUNT_TYPES } from 'utils/permissions';

export default {
  namespaced: true,
  state: {
    user: '',
    userTeam: '',
    accountType: '',
    collectedPointsIds: [],
    valueChanged: false,
  },
  getters: {
    user: state => state.user,
    userTeam: state => state.userTeam,
    accountType: state => state.accountType,
    isLogin: state => state.user !== '',
    collectedPointsIds: state => state.collectedPointsIds,
    valueChanged: state => state.valueChanged,
    collectedPoints (state, getters, rootState, rootGetters) {
      const collectedPoints = [];

      for (const pointId of getters.collectedPointsIds) {
        const point = rootGetters['event/getPointById'](pointId);

        uCheck.isDefined(point) ? collectedPoints.push(point) : undefined;
      }
      return collectedPoints;
    },
  },
  mutations: {
    setUser: (state, payload) => (state.user = payload),
    setUserTeam: (state, payload) => (state.userTeam = payload),
    setAccountType: (state, payload) => (state.accountType = payload),
    setCollectedPointsIds: (state, payload) => (state.collectedPointsIds = payload || []),
    addCollectedPointId: (state, payload) => (state.collectedPointsIds.push(payload)),
    setValueChanged: (state, payload) => (state.valueChanged = payload),
    signOut: state => {
      state.user = '';
      state.userTeam = '';
      state.collectedPointsIds = [];
      autoUpdate.stop();
    },
  },
  actions: {
    signIn (context, { eventId, user, collectedPointsIds, userTeam, accountType = ACCOUNT_TYPES.common }) {
      return new Promise((resolve, reject) => {
        context.commit('event/setId', eventId, { root: true });
        context.commit('setUser', user);
        context.commit('setUserTeam', userTeam);
        context.commit('setAccountType', accountType);
        context.commit('setCollectedPointsIds', collectedPointsIds);
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
