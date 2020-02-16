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
    }), 1000)
  },
  signUp (data) {
    return makeDelayFakeAnswer(() => {
      console.log(data)
      return 'OK'
    }, 1000)
  },
  remindPassword (data) {
    return makeDelayFakeAnswer(() => {
      console.log(data)
      return 'OK'
    }, 1000)
  },
}
