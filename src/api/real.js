import { AppEvent } from 'src/structures/event';
import { request } from 'utils/request';

export const realApi = {
  getEventById (eventId) {
    return new Promise((resolve) => {
      request.get({
        url: '/event',
        data: { eventId },
      })
        .then(response => response.json())
        .then(response => resolve(new AppEvent(response)))
        .catch(() => {
          console.error(new Error('Error: Something went wrong'));
        });
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
          if (data.user === email) {
            resolve({
              eventId: data.eventId,
              patrolName: data.teamName,
              collectedPoints: data.collectedPoints,
              email: data.user,
            });
          } else {
            reject(new Error('E-mail or password is incorrect'));
          }
        })
        .catch(() => {
          reject(new Error('Something went wrong'));
        });
    });
  },
  signUp ({ email, password, patrolName, eventCode }) {
    return new Promise((resolve, reject) => {
      request.post({
        url: '/user',
        data: {
          user: email,
          password,
          teamName: patrolName,
          eventId: eventCode,
        },
      })
        .then(response => response.json())
        .then(data => {
          if (data.user === email) {
            resolve();
          } else {
            reject(new Error('Wystąpił błąd przy rejestracji'));
          }
        })
        .catch(() => {
          reject(new Error('Error: Something went wrong'));
        });
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
          if (data.user === email) {
            resolve();
          } else {
            reject(new Error('Proszę wprowadzić poprawny e-mail'));
          }
        })
        .catch(() => {
          reject(new Error('Error: Something went wrong'));
        });
    });
  },
  signOut ({ email }) {
    return new Promise((resolve, reject) => {
      request.delete({
        url: '/user/login',
      })
        .then(response => response.json())
        .then(data => {
          if (data.user === email) {
            resolve();
          } else {
            reject(new Error('Błąd przy wylogowywaniu'));
          }
        })
        .catch(() => {
          reject(new Error('Error: Something went wrong'));
        });
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
        .catch(() => {
          reject(new Error('Error: Something went wrong'));
        });
    });
  },
  collectPoint ({ email, eventCode, patrolName, pointId }) {
    return new Promise((resolve, reject) => {
      request.put({
        url: '/event/collect',
      })
        .then(response => response.json())
        .then(data => {
          if (data.user === email) {
            resolve();
          } else {
            reject(new Error('Coś poszło nie tak'));
          }
        })
        .catch(() => {
          reject(new Error('Error: Something went wrong'));
        });
    });
  },
};
