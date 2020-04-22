import { getEventByIdMock } from 'api/mockMethods/get-event-by-id';
import { getCollectedPointsByMock } from 'api/mockMethods/get-collected-points';
import { ErrorMessage } from 'utils/error-message';
import { ERRORS } from 'utils/macros/errors';

function makeDelayFakeAnswer (method = () => undefined, timeout = 100) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(method());
    }, timeout);
  });
}

// function makeDelayError (timeout = 100) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new ErrorMessage(ERRORS.fakeErrorInMockApi));
//     }, 1000);
//   });
// }

export const mockApi = {
  getEventById (eventId) {
    if (eventId) {
      return makeDelayFakeAnswer(getEventByIdMock);
    } else {
      return Promise.reject(new ErrorMessage(ERRORS.eventIdIsRequired));
    }
  },
  signIn ({ user, password }) {
    return makeDelayFakeAnswer(() => ({
      eventId: '111',
      collectedPointsIds: ['1', '2', '5'],
      userTeam: 'HARC',
      user,
    }), 500);
  },
  signUp ({ user, password, userTeam, eventId }) {
    return makeDelayFakeAnswer();
  },
  remindPassword ({ user }) {
    return makeDelayFakeAnswer();
  },
  signOut () {
    return makeDelayFakeAnswer();
  },
  changePassword () {
    return makeDelayFakeAnswer();
  },
  collectPoint ({ user, eventId, pointId }) {
    return makeDelayFakeAnswer();
  },
};
