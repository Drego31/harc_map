import { store } from 'store/index';
import { uCheck } from '@dbetka/utils';
import { ErrorMessage } from 'utils/error-message';

// ACCOUNT_TYPES is available in vue templates
export const ACCOUNT_TYPES = {
  common: 'common',
  admin: 'admin',
};

export const permissions = {
  // permissions.check method is available in vue templates
  check (accountType) {
    const user = store.getters['user/user'];
    if (uCheck.isDefined(user) && user !== '') {
      const userAccountType = store.getters['user/accountType'];
      if (userAccountType === accountType) {
        return true;
      }
    }
    return false;
  },
  promiseCheck (accountType) {
    return new Promise((resolve, reject) => {
      const correctPermissions = permissions.check(accountType);
      if (correctPermissions === true) {
        resolve();
      } else {
        reject(new ErrorMessage('User has no permission for this action'));
      }
    });
  },
};
