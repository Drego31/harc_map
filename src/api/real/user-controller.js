import { makeRequest, request } from 'utils/request';
import { API_ERRORS } from 'utils/macros/errors';

export const userController = {
  signIn ({ user, password }) {
    return makeRequest({
      method: request.post,
      url: '/user/login',
      data: {
        user,
        password,
      },
      ...API_ERRORS.signIn,
    });
  },
  checkYourLoginSession () {
    return makeRequest({
      method: request.post,
      url: '/user/login',
      ...API_ERRORS.checkYourLoginSession,
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
      ...API_ERRORS.signUp,
    });
  },
  remindPassword ({ user }) {
    return makeRequest({
      method: request.post,
      url: '/user/remind',
      data: { user },
      ...API_ERRORS.remindPassword,
    });
  },
  signOut ({ user }) {
    return makeRequest({
      method: request.delete,
      url: '/user/login',
      data: { user },
      ...API_ERRORS.signOut,
    });
  },
  changePassword: function ({ password, key }) {
    return makeRequest({
      method: request.put,
      url: '/user/remind/' + key,
      data: { password },
      ...API_ERRORS.changePassword,
    });
  },
};
