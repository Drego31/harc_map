import { mockApi } from './mock'

const realApi = {
  example () {
    return new Promise((resolve) => {
      resolve('example')
    })
  },
}

export const api = {
  ...mockApi,
  ...realApi,
}
