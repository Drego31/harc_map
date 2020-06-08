import { AppEvent } from 'src/structures/app-event';
import { request } from 'utils/request';
import { ErrorMessage } from 'utils/error-message';
import { ERRORS } from 'utils/macros/errors';
import { logical } from 'vendors/logical';
import { MapPoint } from 'src/structures/map-point';

function catchConnectionError (reject) {
  return function (fetchError) {
    reject(new ErrorMessage(fetchError));
  };
}

function hasNoError (data) {
  return logical.isNull(data.error);
}

export const realApi = {
  signIn ({ user, password }) {
    return new Promise((resolve, reject) => {
      request.post({
        url: '/user/login',
        data: {
          user,
          password,
        },
      })
        .then(response => response.json())
        .then(data => {
          if (hasNoError(data)) {
            delete data.error;
            resolve(data);
          } else {
            reject(new ErrorMessage(ERRORS.signIn));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  checkYourLoginSession () {
    return new Promise((resolve, reject) => {
      request.post({
        url: '/user/login',
      })
        .then(response => response.json())
        .then(data => {
          if (hasNoError(data)) {
            delete data.error;
            resolve(data);
          } else {
            reject(new ErrorMessage(ERRORS.signIn));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  signUp ({ user, password, userTeam, eventId }) {
    return new Promise((resolve, reject) => {
      request.post({
        url: '/user',
        data: {
          user,
          password,
          userTeam,
          eventId,
        },
      })
        .then(response => response.json())
        .then(data => {
          if (hasNoError(data)) {
            resolve();
          } else {
            reject(new ErrorMessage(ERRORS.signUp));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  remindPassword ({ user }) {
    return new Promise((resolve, reject) => {
      request.post({
        url: '/user/remind',
        data: { user },
      })
        .then(response => response.json())
        .then(data => {
          if (hasNoError(data)) {
            resolve();
          } else {
            reject(new ErrorMessage(ERRORS.remindPassword));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  signOut ({ user }) {
    return new Promise((resolve, reject) => {
      request.delete({
        url: '/user/login',
        data: { user },
      })
        .then(response => response.json())
        .then(data => {
          if (hasNoError(data)) {
            resolve();
          } else {
            reject(new ErrorMessage(ERRORS.signOut));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  changePassword: function ({ password, key }) {
    return new Promise((resolve, reject) => {
      request.put({
        url: '/user/remind/' + key,
        data: { password },
      })
        .then(() => {
          resolve();
        })
        .catch(catchConnectionError(reject));
    });
  },
  getEventById (eventId) {
    return new Promise((resolve, reject) => {
      request.get({
        url: '/event',
        data: { eventId },
      })
        .then(response => response.json())
        .then(data => {
          if (hasNoError(data)) {
            resolve(new AppEvent(data));
          } else {
            reject(new ErrorMessage(ERRORS.getEventById));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  getPointsByEventId ({ eventId }) {
    return new Promise((resolve, reject) => {
      request.get({
        url: '/event/points',
        data: { eventId },
      })
        .then(response => response.json())
        .then(data => {
          if (hasNoError(data)) {
            resolve(data.points.map(point => new MapPoint(point)));
          } else {
            reject(new ErrorMessage(ERRORS.getEventById));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  getCategoriesByEventId ({ eventId }) {
    return new Promise((resolve, reject) => {
      request.get({
        url: '/event/point/categories',
        data: { eventId },
      })
        .then(response => response.json())
        .then(data => {
          if (hasNoError(data)) {
            resolve(data.categories);
          } else {
            reject(new ErrorMessage(ERRORS.getEventById));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  collectPoint ({ user, eventId, pointId }) {
    return new Promise((resolve, reject) => {
      request.put({
        url: '/event/point/collect',
        data: {
          user,
          eventId,
          pointId,
        },
      })
        .then(response => response.json())
        .then(data => {
          if (hasNoError(data)) {
            resolve();
          } else {
            reject(new ErrorMessage(ERRORS.collectPoint));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
};
