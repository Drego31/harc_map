import { mockApi } from './mock'
// import { AppEvent } from 'src/structures/event'
// import { request } from 'utils/request'

const realApi = {
  // getEventById (eventId) {
  //   return new Promise((resolve) => {
  //     request.get({
  //       url: '/event',
  //       data: { eventId },
  //     })
  //       .then(response => response.json())
  //       .then(response => resolve(new AppEvent(response)))
  //       .catch(() => {
  //         console.error(new Error('Error: Something went wrong'))
  //       })
  //   })
  // },
  // signIn ({ email, password }) {
  //   return new Promise((resolve, reject) => {
  //     fetch('/user/login', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         user: email,
  //         password,
  //       }),
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         if (data.user === email) {
  //           resolve({
  //             eventId: data.eventId,
  //             patrolName: data.teamName,
  //             collectedPoints: data.collectedPoints,
  //             email: data.user,
  //           })
  //         } else {
  //           reject(new Error('E-mail or password is wrong'))
  //         }
  //       })
  //       .catch(() => {
  //         console.error(new Error('Error: Something went wrong'))
  //       })
  //   })
  // },
  // signUp ({ email, password, patrolName, eventCode }) {
  //   return new Promise((resolve, reject) => {
  //     fetch('/user', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         user: email,
  //         password,
  //         teamName: patrolName,
  //         eventId: eventCode,
  //       }),
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         if (data.user === email) {
  //           resolve()
  //         } else {
  //           reject(new Error('Wystąpił błąd przy rejestracji'))
  //         }
  //       })
  //       .catch(() => {
  //         console.error(new Error('Error: Something went wrong'))
  //       })
  //   })
  // },
  // remindPassword ({ email }) {
  //   return new Promise((resolve, reject) => {
  //     fetch('/user/remind', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         user: email,
  //       }),
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         if (data.user === email) {
  //           resolve()
  //         } else {
  //           reject(new Error('Proszę wprowadzić poprawny e-mail'))
  //         }
  //       })
  //       .catch(() => {
  //         console.error(new Error('Error: Something went wrong'))
  //       })
  //   })
  // },
  // signOut ({ email }) {
  //   return new Promise((resolve, reject) => {
  //     fetch('/user/login', {
  //       method: 'DELETE',
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         if (data.user === email) {
  //           resolve()
  //         } else {
  //           reject(new Error('Błąd przy wylogowywaniu'))
  //         }
  //       })
  //       .catch(() => {
  //         console.error(new Error('Error: Something went wrong'))
  //       })
  //   })
  // },
  // collectPoint ({ email, eventCode, patrolName, pointId }) {
  //   return new Promise((resolve, reject) => {
  //     fetch('/event/collect', {
  //       method: 'PUT',
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         if (data.user === email) {
  //           resolve()
  //         } else {
  //           reject(new Error('Coś poszło nie tak'))
  //         }
  //       })
  //       .catch(() => {
  //         console.error(new Error('Error: Something went wrong'))
  //       })
  //   })
  // },
}

export const api = {
  ...mockApi,
  ...realApi,
}

window.api = api
