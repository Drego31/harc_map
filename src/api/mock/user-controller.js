import { makeDelayFakeAnswer } from 'api/mock/mock';
import { ErrorMessage } from 'utils/error-message';
import { ERRORS } from 'utils/macros/errors';

let globalUser = '';

export const userController = {
  signIn ({ user, password }) {
    globalUser = user;
    return makeDelayFakeAnswer(() => ({
      eventId: '111',
      collectedPointsIds: ['1', '2', '5'],
      userTeam: 'HARC',
      user,
    }));
  },
  signUp ({ user, password, userTeam, eventId }) {
    return makeDelayFakeAnswer(() => ({
      user,
    }));
  },
  remindPassword ({ user }) {
    return makeDelayFakeAnswer(() => ({
      user,
    }));
  },
  signOut () {
    return makeDelayFakeAnswer(() => ({
      user: globalUser,
    }));
  },
  changePassword ({ password, key }) {
    return makeDelayFakeAnswer(() => ({}));
  },
  checkYourLoginSession () {
    return new Promise((resolve, reject) => {
      reject(new ErrorMessage(ERRORS.signIn));
    });
  },
};
