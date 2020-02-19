import { getEventByIdMock } from 'api/mockMethods/get-event-by-id'

function makeDelayFakeAnswer (method = () => undefined, timeout = 100) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(method())
    }, timeout)
  })
}

export const mockApi = {
  getEventById (eventId) {
    if (eventId) {
      return makeDelayFakeAnswer(getEventByIdMock)
    } else {
      return Promise.reject(new Error('eventId is required'))
    }
  },
  signIn ({ email, password }) {
    return makeDelayFakeAnswer(() => ({
      eventId: '111',
    }), 500)
  },
  signUp ({ email, password, patrolName, eventCode }) {
    return makeDelayFakeAnswer(() => {
      console.log(email)
    }, 1000)
  },
  remindPassword () {
    return makeDelayFakeAnswer(() => {
      return 'OK'
    }, 1000)
  },
}
