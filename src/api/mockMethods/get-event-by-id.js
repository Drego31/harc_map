import { AppEvent } from 'src/structures/app-event'

export function getEventByIdMock () {
  return new AppEvent({
    eventId: '111',
    name: 'Event',
    default_position: {
      latitude: 54.4922,
      longitude: 18.5133,
    },
    default_zoom: 12,
    points: [
      {
        pointId: '1',
        name: 'Point 1',
        position: {
          latitude: 54.51728,
          longitude: 18.51465,
        },
        type: 3,
      },
      {
        pointId: '2',
        name: 'Point 2',
        position: {
          latitude: 54.51111,
          longitude: 18.51173,
        },
        type: 2,
      },
      {
        pointId: '3',
        name: 'Point 3',
        position: {
          latitude: 54.51548,
          longitude: 18.54418,
        },
        type: 3,
      },
      {
        pointId: '4',
        name: 'Point 4',
        position: {
          latitude: 54.51851,
          longitude: 18.55863,
        },
        type: 2,
      },
      {
        pointId: '5',
        name: 'Point 5',
        position: {
          latitude: 54.49639,
          longitude: 18.56198,
        },
        type: 1,
      },
      {
        pointId: '6',
        name: 'Point 6',
        position: {
          latitude: 54.50585,
          longitude: 18.52872,
        },
        type: 2,
      },
      {
        pointId: '7',
        name: 'Point 7',
        position: {
          latitude: 54.48899,
          longitude: 18.49213,
        },
        type: 1,
      },
    ],
  })
}
