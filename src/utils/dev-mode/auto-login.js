import { api } from 'api';
import { store } from 'store';
import { ACCOUNT_TYPES } from 'utils/permissions';
import { ErrorMessage } from 'utils/error-message';

const users = Object.freeze({
  common: {
    user: USER,
    password: PASSWORD,
  },
  admin: {
    user: ADMIN_USER,
    password: ADMIN_PASSWORD,
  },
});

function login (values) {
  api.signOut({ user: store.getters['user/user'] })
    .then(() => api.signIn(values))
    .then(data => store.dispatch('user/signIn', data))
    .catch(error => {
      if (error instanceof ErrorMessage) error.showMessage();
      else console.log(error);
    });
}

export const autoLogin = {
  switch () {
    const accountType = store.getters['user/accountType'];
    if (accountType === ACCOUNT_TYPES.admin) this.common();
    else this.admin();
  },
  common: () => login(users.common),
  admin: () => login(users.admin),
};

if (PRODUCTION === false) {
  window.autoLogin = autoLogin;
}

export const DEV_USERS_LIST = users;
