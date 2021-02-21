import { store } from 'store';
import { uCheck } from '@dbetka/utils';
import { ErrorMessage } from 'utils/error-message';

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
