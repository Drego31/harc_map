import { makeDelayFakeAnswer } from 'api/mock/mock';

let globalUser = ''; // TODO How to change it?

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
    return makeDelayFakeAnswer(() => ({
    }));
  },
};
