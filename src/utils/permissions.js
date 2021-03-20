import { store } from 'store';
import { uCheck } from '@dbetka/utils';
import { ErrorMessage } from 'utils/error-message';
import { routes } from 'src/router/routes';

// ACCOUNT_TYPES is available in vue templates
export const ACCOUNT_TYPES = {
  common: 'common',
  admin: 'admin',
};

export const permissions = {
  // permissions.check method is available in vue templates
  checkPermissions (accountType) {
    const user = store.getters['user/user'];
    if (uCheck.isDefined(user) && user !== '') {
      const userAccountType = store.getters['user/accountType'];
      if (userAccountType === accountType) {
        return true;
      }
    }
    return false;
  },
  promiseCheckPermissions (accountType) {
    return new Promise((resolve, reject) => {
      const correctPermissions = permissions.check(accountType);
      if (correctPermissions === true) {
        resolve();
      } else {
        reject(new ErrorMessage('User has no permission for this action'));
      }
    });
  },
  checkIsAdmin () {
    return this.checkPermissions(ACCOUNT_TYPES.admin);
  },
  checkIsLimited () {
    return store.getters['user/limitedPermissions'];
  },
  checkIsNotLimited () {
    return this.checkIsLimited() === false;
  },
  checkLimitingForRoute ({ name }) {
    const route = routes.find(route => route.name === name) || {};
    const unlimitedOnly = route.meta.unlimitedOnly === true;
    const isNotLimited = this.checkIsNotLimited();
    return (unlimitedOnly && isNotLimited) || unlimitedOnly === false;
  },
  checkIsCommon () {
    return this.checkPermissions(ACCOUNT_TYPES.common);
  },
  promiseCheckIsAdmin () {
    return this.promiseCheckPermissions(ACCOUNT_TYPES.admin);
  },
  promiseCheckIsCommon () {
    return this.promiseCheckPermissions(ACCOUNT_TYPES.common);
  },
};

window.permissions = permissions;
