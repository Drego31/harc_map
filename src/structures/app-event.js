export class AppEvent {
  constructor ({
    eventId = '',
    eventName = '',
    mapLatitude,
    mapLongitude,
    mapZoom = 2,
  }) {
    this.eventId = eventId;
    this.eventName = eventName;
    this.mapPosition = {
      latitude: mapLatitude,
      longitude: mapLongitude,
    };
    this.mapZoom = mapZoom;
  }
}
