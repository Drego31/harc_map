import { makeRequest, request } from 'utils/request';
import { ERRORS } from 'utils/macros/errors';
import { apiResponseService } from 'utils/api-response-service';

export const userController = {
  signIn ({ user, password }) {
    return makeRequest({
      method: request.post,
      url: '/user/login',
      data: {
        user,
        password,
      },
      defaultError: ERRORS.signIn,
    });
  },
  checkYourLoginSession () {
    return makeRequest({
      method: request.post,
      url: '/user/login',
      defaultError: ERRORS.checkYourLoginSession,
    });
  },
  signUp ({ user, password, userTeam, eventId }) {
    return makeRequest({
      method: request.post,
      url: '/user',
      data: {
        user,
        password,
        userTeam,
        eventId,
      },
      defaultError: ERRORS.signUp,
    });
  },
  remindPassword ({ user }) {
    return makeRequest({
      method: request.post,
      url: '/user/remind',
      data: { user },
      defaultError: ERRORS.remindPassword,
    });
  },
  signOut ({ user }) {
    return makeRequest({
      method: request.delete,
      url: '/user/login',
      data: { user },
      defaultError: ERRORS.signOut,
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
