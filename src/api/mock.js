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
      score: 5,
      patrolName: 'HARC',
      email,
    }), 500)
  },
  signUp ({ email, password, patrolName, eventCode }) {
    return makeDelayFakeAnswer(() => ({
      email,
    }), 1000)
  },
  remindPassword ({email}) {
    return makeDelayFakeAnswer(() => ({
      email,
    }), 1000)
  },
  signOut () {
    return makeDelayFakeAnswer(() => {
      this.$store.commit('user/signOut')
    }, 1000)
  },
}
