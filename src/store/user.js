import { uCheck } from '@dbetka/utils';
import { autoUpdate } from 'utils/auto-update';
import { ACCOUNT_TYPES } from 'utils/permissions';
import { ErrorMessage } from 'utils/error-message';
import { ERRORS } from 'utils/macros/errors';

export default {
  namespaced: true,
  state: {
    user: '',
    userTeam: '',
    accountType: '',
    firstLogin: false,
    collectedPointsIds: [],
  },
  getters: {
    user: state => state.user,
    userTeam: state => state.userTeam,
    accountType: state => state.accountType,
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
    setAccountType: (state, payload) => (state.accountType = payload),
    setFirstLogin: (state, payload) => (state.firstLogin = payload),
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
    signIn (context, data) {
      const { eventId, user, collectedPointsIds, userTeam, accountType = ACCOUNT_TYPES.common, firstLogin } = data;
      return new Promise((resolve, reject) => {
        context.commit('event/setId', eventId, { root: true });
        context.commit('setUser', user);
        context.commit('setUserTeam', userTeam);
        context.commit('setAccountType', accountType);
        context.commit('setFirstLogin', firstLogin);
        context.commit('setCollectedPointsIds', collectedPointsIds);
        context.dispatch('event/download', undefined, { root: true })
          .then(() => {
            autoUpdate.run();
            resolve(data);
          })
          .catch(() => {
            context.dispatch('signOut').catch(() => undefined);
            reject(new ErrorMessage(ERRORS.signIn, { hard: true }));
          });
      });
    },
    signOut (context) {
      return new Promise((resolve, reject) => {
        const user = context.state.user;
        api.signOut({ user })
          .finally(() => {
            context.commit('signOut');
            resolve();
          })
          .catch(() => {
            const error = new ErrorMessage(ERRORS.signOut);
            error.showMessage();
            reject(error);
          });
      });
    },
  },
};
