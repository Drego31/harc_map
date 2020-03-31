import { AppEvent } from 'src/structures/app-event';

export function getEventByIdMock () {
  return new AppEvent({
    eventId: '1234',
    name: 'Event',
    mapPosition: {
      latitude: 54.4922,
      longitude: 18.5133,
    },
    mapZoom: 11,
    points: [
      {
        pointId: '1111',
        name: 'Point 1',
        latitude: 54.51728,
        longitude: 18.51465,
        type: 3,
      },
      {
        pointId: '2222',
        name: 'Point 2',
        latitude: 54.51111,
        longitude: 18.51173,
        type: 2,
      },
      {
        pointId: '3333',
        name: 'Point 3',
        latitude: 54.51548,
        longitude: 18.54418,
        type: 3,
      },
      {
        pointId: '4444',
        name: 'Point 4',
        latitude: 54.51851,
        longitude: 18.55863,
        type: 2,
      },
      {
        pointId: '5',
        name: 'Point 5',
        latitude: 54.49639,
        longitude: 18.56198,
        type: 1,
      },
      {
        pointId: '6',
        name: 'Point 6',
        latitude: 54.50585,
        longitude: 18.52872,
        type: 2,
      },
      {
        pointId: '7',
        name: 'Point 7',
        latitude: 54.48899,
        longitude: 18.49213,
        type: 1,
      },
    ],
  });
}
