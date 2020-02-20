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
}

export const api = {
  ...mockApi,
  ...realApi,
}

window.api = api
