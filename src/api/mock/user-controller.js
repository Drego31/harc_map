import { makeDelayFakeAnswer } from 'api/mock/mock';
import { ErrorMessage } from 'utils/error-message';
import { ERRORS } from 'utils/macros/errors';
import { ACCOUNT_TYPES } from 'utils/permissions';

let globalUser = '';

export const userController = {
  allUsers () {
    return makeDelayFakeAnswer(() => ({
      users: [
        {
          user: 'dominik.betka@gmail.com',
          userTeam: 'Zastęp Orchis',
          accountIsActive: true,
          accountCreated: 1614675013910,
          collectedPointsIds: [],
          accountType: ACCOUNT_TYPES.admin,
        },
        {
          user: 'demo@demo.com',
          userTeam: 'Zastęp Demo',
          accountIsActive: true,
          accountCreated: 1614675013911,
          collectedPointsIds: ['o05r', '7DIF', 'Xq0B', '1Pr6'],
          accountType: ACCOUNT_TYPES.common,
        },
        {
          user: 'dominik.betka@zhp.net.pl',
          userTeam: 'Rettis',
          accountIsActive: true,
          accountCreated: 1614720221776,
          collectedPointsIds: ['o05r', '1Pr6', '9Enr'],
          accountType: ACCOUNT_TYPES.common,
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
