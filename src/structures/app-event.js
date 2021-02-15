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
    this.mapLatitude = mapLatitude;
    this.mapLongitude = mapLongitude;
    this.mapZoom = mapZoom;
  }
}
