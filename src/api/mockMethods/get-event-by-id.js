import { AppEvent } from 'src/structures/app-event'

export function getMockEventById () {
  return new AppEvent({
    eventId: '111',
    name: 'Event',
    default_position: {
      longitude: 124.1345,
      latitude: 45.4634,
    },
    default_zoom: 11,
    points: [{
      pointId: '2',
      name: 'Point',
      position: {
        longitude: 124.1345,
        latitude: 45.4634,
      },
      type: 2,
    }],
  })
}
