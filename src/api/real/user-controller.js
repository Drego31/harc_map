import { request } from 'utils/request';
import { ErrorMessage } from 'utils/error-message';
import { ERRORS } from 'utils/macros/errors';
import { hasNoError, catchConnectionError } from 'api/real/real';

export const userController = {
  signIn ({ user, password }) {
    return new Promise((resolve, reject) => {
      request.post({
        url: '/user/login',
        data: {
          user,
          password,
        },
      })
        .then(response => response.json())
        .then(data => {
          if (hasNoError(data)) {
            delete data.error;
            resolve(data);
          } else {
            reject(new ErrorMessage(ERRORS.signIn));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  checkYourLoginSession () {
    return new Promise((resolve, reject) => {
      request.post({
        url: '/user/login',
      })
        .then(response => response.json())
        .then(data => {
          if (hasNoError(data)) {
            delete data.error;
            resolve(data);
          } else {
            reject(new ErrorMessage(ERRORS.signIn));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  signUp ({ user, password, userTeam, eventId }) {
    return new Promise((resolve, reject) => {
      request.post({
        url: '/user',
        data: {
          user,
          password,
          userTeam,
          eventId,
        },
      })
        .then(response => response.json())
        .then(data => {
          if (hasNoError(data)) {
            resolve();
          } else {
            reject(new ErrorMessage(ERRORS.signUp));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  remindPassword ({ user }) {
    return new Promise((resolve, reject) => {
      request.post({
        url: '/user/remind',
        data: { user },
      })
        .then(response => response.json())
        .then(data => {
          if (hasNoError(data)) {
            resolve();
          } else {
            reject(new ErrorMessage(ERRORS.remindPassword));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  signOut ({ user }) {
    return new Promise((resolve, reject) => {
      request.delete({
        url: '/user/login',
        data: { user },
      })
        .then(response => response.json())
        .then(data => {
          if (hasNoError(data)) {
            resolve();
          } else {
            reject(new ErrorMessage(ERRORS.signOut));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  changePassword: function ({ password, key }) {
    return new Promise((resolve, reject) => {
      request.put({
        url: '/user/remind/' + key,
        data: { password },
      })
        .then(() => {
          resolve();
        })
        .catch(catchConnectionError(reject));
    });
  },
};
