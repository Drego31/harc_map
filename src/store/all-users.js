import { ACCOUNT_TYPES } from 'utils/permissions';

export default {
  namespaced: true,
  state: {
    users: [],
  },
  getters: {
    users: state => state.users,
    commonUsers (state, getters) {
      return getters.users
        .filter(user => user.accountType === ACCOUNT_TYPES.common);
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
