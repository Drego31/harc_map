import { getMockPoints } from 'api/mockMethods/get-points'

function makeDelayFakeAnswer (method = () => undefined, timeout = 100) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(method())
    }, timeout)
  })
}

export const mockApi = {
  getPoints () {
    return makeDelayFakeAnswer(getMockPoints)
  },
  signIn (data) {
    return makeDelayFakeAnswer(() => {
      console.log(data)
      return 'OK'
    }, 1000)
  },
}
