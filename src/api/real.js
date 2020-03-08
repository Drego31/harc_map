import { AppEvent } from 'src/structures/app-event';
import { request } from 'utils/request';
import { ErrorMessage } from 'utils/error-message';
import { ERRORS } from 'utils/macros/errors';
import { logical } from 'vendors/logical';

function catchConnectionError (reject) {
  return function (fetchError) {
    reject(new ErrorMessage(fetchError));
  };
}

export const realApi = {
  getEventById (eventId) {
    return new Promise((resolve, reject) => {
      request.get({
        url: '/event',
        data: { eventId },
      })
        .then(response => response.json())
        .then(data => {
          if (logical.isNull(data.error)) {
            resolve(new AppEvent(data));
          } else {
            reject(new ErrorMessage(ERRORS.getEventById));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  signIn ({ email, password }) {
    return new Promise((resolve, reject) => {
      request.post({
        url: '/user/login',
        data: {
          user: email,
          password,
        },
      })
        .then(response => response.json())
        .then(data => {
          if (logical.isNull(data.error)) {
            resolve({
              eventId: data.eventId,
              patrolName: data.teamName,
              collectedPointsIds: data.collectedPointsIds,
              email: data.user,
            });
          } else {
            reject(new ErrorMessage(ERRORS.signIn));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  signUp ({ email, password, patrolName, eventId }) {
    return new Promise((resolve, reject) => {
      request.post({
        url: '/user',
        data: {
          user: email,
          password,
          teamName: patrolName,
          eventId,
        },
      })
        .then(response => response.json())
        .then(data => {
          if (logical.isNull(data.error)) {
            resolve();
          } else {
            reject(new ErrorMessage(ERRORS.signUp));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  remindPassword ({ email }) {
    return new Promise((resolve, reject) => {
      request.post({
        url: '/user/remind',
        data: { user: email },
      })
        .then(response => response.json())
        .then(data => {
          if (logical.isNull(data.error)) {
            resolve();
          } else {
            reject(new ErrorMessage(ERRORS.remindPassword));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  signOut ({ email }) {
    return new Promise((resolve, reject) => {
      request.delete({
        url: '/user/login',
      })
        .then(response => response.json())
        .then(data => {
          if (logical.isNull(data.error)) {
            resolve();
          } else {
            reject(new ErrorMessage(ERRORS.signOut));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  changePassword: function ({ password }) {
    return new Promise((resolve, reject) => {
      request.put({
        url: '/user/remind',
        data: { password },
      })
        .then(() => {
          resolve();
        })
        .catch(catchConnectionError(reject));
    });
  },
  collectPoint ({ email, eventId, patrolName, pointId }) {
    return new Promise((resolve, reject) => {
      request.put({
        url: '/event/collect',
      })
        .then(response => response.json())
        .then(data => {
          if (logical.isNull(data.error)) {
            resolve();
          } else {
            reject(new ErrorMessage(ERRORS.collectPoint));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
};
