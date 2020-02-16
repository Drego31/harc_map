import { getMockEventById } from 'api/mockMethods/get-event-by-id'

function makeDelayFakeAnswer (method = () => undefined, timeout = 100) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(method())
    }, timeout)
  })
}

export const mockApi = {
  getEventById (eventId) {
    return makeDelayFakeAnswer(getMockEventById)
  },
  signIn (data) {
    return makeDelayFakeAnswer(() => {
      console.log(data)
      return 'OK'
    }, 1000)
  },
  signUp (data) {
    return makeDelayFakeAnswer(() => {
      console.log(data)
      return 'OK'
    }, 1000)
  },
}
