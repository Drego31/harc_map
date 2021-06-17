import { AppEvent } from 'src/structures/app-event';

export function getEventByIdMock (eventId) {
  return new AppEvent({
    'eventId': eventId,
    'eventName': 'Event',
    'mapZoom': 11,
    'mapLongitude': 18.4735,
    'mapLatitude': 54.4787,
  });
}
