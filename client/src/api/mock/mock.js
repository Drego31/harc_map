import { eventController } from 'api/mock/event-controller';
import { userController } from 'api/mock/user-controller';

export function makeDelayFakeAnswer (method = () => undefined, timeout = 500) {
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
  ...eventController,
  ...userController,
  information () {
    const appVersion = VERSION;
    // console.log(`request: 'information', response: '${appVersion}'`);
    return makeDelayFakeAnswer(() => ({
      appVersion,
    }));
  },
};
