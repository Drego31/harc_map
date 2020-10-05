import { store } from 'store/index';
import { uCheck } from '@dbetka/utils';
import { ErrorMessage } from 'utils/error-message';

export const ACCOUNT_TYPES = {
  common: 'common',
  admin: 'admin',
};

export const permissions = {
  check (accountType) {
    return new Promise((resolve, reject) => {
      const user = store.getters['user/user'];
      if (uCheck.isDefined(user)) {
        if (user.accountType === accountType) {
          resolve();
        } else {
          reject(new ErrorMessage('User has no permission for this action'));
        }
      }
      reject(new ErrorMessage('User has no permission for this action'));
    });
  },
};

window.permissions = permissions;
