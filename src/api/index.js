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
}

export const api = {
  ...mockApi,
  ...realApi,
}

window.api = api
