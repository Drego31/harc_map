import { mockApi } from './mock'
// import { AppEvent } from 'src/structures/event'

const realApi = {
  // getEventById (eventId) {
  //   return new Promise((resolve) => {
  //     fetch('/event?eventId=' + eventId)
  //       .then(data => data.json())
  //       .then(response => {
  //         resolve(new AppEvent(response))
  //       })
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
  //           resolve({ eventId: data.eventId })
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
  //           resolve('Konto utworzono pomyślnie')
  //         } else {
  //           reject(new Error('Wystąpił błąd przy rejestracji'))
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
