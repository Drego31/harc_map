import { getMockPoints } from 'api/mocks/get-points'

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
}
