import { ACCOUNT_TYPES } from 'utils/permissions';
import { uCheck } from '@dbetka/utils';

export default {
  namespaced: true,
  state: {
    users: [],
  },
  getters: {
    users: state => state.users,
    commonUsers: (state, getters) => getters.users
      .filter(user => user.accountType === ACCOUNT_TYPES.common),
    userByUserField: (state) => userField => state.users
      .find(user => user.user === userField),
    collectedPointsByUser: (state, getters, rootState, rootGetters) => user => {
      const collectedPoints = [];
      for (const pointId of user.collectedPointsIds) {
        const point = rootGetters['event/getPointById'](pointId);

        uCheck.isDefined(point) ? collectedPoints.push(point) : undefined;
      }
      return collectedPoints;
    },
    scoreByUser: (state, getters, rootState, rootGetters) => user => {
      return getters.collectedPointsByUser(user)
        .map(point => rootGetters['event/pointValueByPointCategory'](point.pointCategory))
        .reduce((a, b) => (a + b), 0);
    },
  },
  mutations: {
    setUsers: (state, payload) => (state.users = payload),
  },
  actions: {
    download (context) {
      return new Promise((resolve, reject) => {
        api.allUsers()
          .then(({ users }) => {
            context.commit('setUsers', users);
            resolve(users);
          })
          .catch(reject);
      });
    },
  },
};
