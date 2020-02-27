import { getEventByIdMock } from 'api/mockMethods/get-event-by-id';
import { ErrorMessage } from 'utils/error-message';

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
//       reject(new ErrorMessage('Fake error in mockApi'));
//     }, 1000);
//   });
// }

export const mockApi = {
  getEventById (eventId) {
    if (eventId) {
      return makeDelayFakeAnswer(getEventByIdMock);
    } else {
      return Promise.reject(new ErrorMessage('"eventId" param is required'));
    }
  },
  signIn ({ email, password }) {
    return makeDelayFakeAnswer(() => ({
      eventId: '111',
      collectedPointsIds: [1, 2, 5],
      patrolName: 'HARC',
      email,
    }), 500);
  },
  signUp ({ email, password, patrolName, eventCode }) {
    return makeDelayFakeAnswer();
  },
  remindPassword ({ email }) {
    return makeDelayFakeAnswer();
  },
  signOut () {
    return makeDelayFakeAnswer();
  },
  changePassword () {
    return makeDelayFakeAnswer();
  },
  collectPoint ({ email, eventCode, patrolName, pointId }) {
    return makeDelayFakeAnswer();
  },
};
