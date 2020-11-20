import { request } from 'utils/request';
import { ERRORS } from 'utils/macros/errors';
import { apiResponseService } from 'utils/api-response-service';

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
        .then(response => apiResponseService.takeOverResponse({
          response,
          resolve (data) {
            delete data.error;
            resolve(data);
          },
          reject,
          defaultError: ERRORS.signIn,
        }))
        .catch(apiResponseService.catchConnectionError(reject));
    });
  },
  checkYourLoginSession () {
    return new Promise((resolve, reject) => {
      request.post({
        url: '/user/login',
      })
        .then(response => apiResponseService.takeOverResponse({
          response,
          resolve (data) {
            delete data.error;
            resolve(data);
          },
          reject,
          defaultError: ERRORS.checkYourLoginSession,
        }))
        .catch(apiResponseService.catchConnectionError(reject));
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
        .then(response => apiResponseService.takeOverResponse({
          response,
          resolve,
          reject,
          defaultError: ERRORS.signUp,
        }))
        .catch(apiResponseService.catchConnectionError(reject));
    });
  },
  remindPassword ({ user }) {
    return new Promise((resolve, reject) => {
      request.post({
        url: '/user/remind',
        data: { user },
      })
        .then(response => apiResponseService.takeOverResponse({
          response,
          resolve,
          reject,
          defaultError: ERRORS.remindPassword,
        }))
        .catch(apiResponseService.catchConnectionError(reject));
    });
  },
  signOut ({ user }) {
    return new Promise((resolve, reject) => {
      request.delete({
        url: '/user/login',
        data: { user },
      })
        .then(response => apiResponseService.takeOverResponse({
          response,
          resolve,
          reject,
          defaultError: ERRORS.signOut,
        }))
        .catch(apiResponseService.catchConnectionError(reject));
    });
  },
  changePassword: function ({ password, key }) {
    return new Promise((resolve, reject) => {
      request.put({
        url: '/user/remind/' + key,
        data: { password },
      })
        .then(() => resolve())
        .catch(apiResponseService.catchConnectionError(reject));
    });
  },
};
