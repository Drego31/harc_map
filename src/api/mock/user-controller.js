import { makeDelayFakeAnswer } from 'api/mock/mock';
import { ErrorMessage } from 'utils/error-message';
import { ERRORS } from 'utils/macros/errors';
import { ACCOUNT_TYPES } from 'utils/permissions';

let globalUser = '';

export const userController = {
  allUsers () {
    return makeDelayFakeAnswer(() => ({
      'users': [
        {
          'user': 'dominik.betka@gmail.com',
          'userTeam': 'Zastęp Orchis',
          'accountIsActive': true,
          'accountCreated': 1614779590554,
          'collectedPointsIds': [],
          'accountType': ACCOUNT_TYPES.admin,
        }, {
          'user': 'demo@demo.com',
          'userTeam': 'Zastęp Demo',
          'accountIsActive': true,
          'accountCreated': 1614779590555,
          'collectedPointsIds': ['cMLY', 'UZ7X', '31ty', 'uWAj', 'rk7p', 'n9jC', 'GrbI', 'Q5Qe'],
          'accountType': ACCOUNT_TYPES.common,
        }, {
          'user': 'demo2@demo.com',
          'userTeam': 'Zastęp Demo2',
          'accountIsActive': true,
          'accountCreated': 1614779590556,
          'collectedPointsIds': ['rEIq', 'FD8Q', 'SOz8', 'qj7Q', 'Ssij', '373z', 'NeIB'],
          'accountType': ACCOUNT_TYPES.common,
        }, {
          'user': 'demo3@demo.com',
          'userTeam': 'Zastęp Demo3',
          'accountIsActive': true,
          'accountCreated': 1614779590556,
          'collectedPointsIds': ['rEIq', 'FD8Q', 'SOz8', 'qj7Q', 'Ssij', '373z', 'NeIB'],
          'accountType': ACCOUNT_TYPES.common,
        }, {
          'user': 'demo4@demo.com',
          'userTeam': 'Zastęp Demo4',
          'accountIsActive': true,
          'accountCreated': 1614779590556,
          'collectedPointsIds': ['rEIq', 'FD8Q', 'SOz8', 'qj7Q', 'Ssij', '373z', 'NeIB'],
          'accountType': ACCOUNT_TYPES.common,
        },
      ],
    }));
  },
  signIn ({
    user,
    password,
  }) {
    globalUser = user;
    return makeDelayFakeAnswer(() => ({
      eventId: '111',
      collectedPointsIds: ['1', '2', '5'],
      userTeam: 'HARC',
      user,
      accountType: ACCOUNT_TYPES.common,
    }));
  },
  signUp ({
    user,
    password,
    userTeam,
    eventId,
  }) {
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
  changePassword ({
    password,
    key,
  }) {
    return makeDelayFakeAnswer(() => ({}));
  },
  checkYourLoginSession () {
    return new Promise((resolve, reject) => {
      reject(new ErrorMessage(ERRORS.signIn));
    });
  },
};
