export class AppEvent {
  constructor ({
    eventId = '',
    eventName = '',
    eventStartDate = null,
    eventEndDate = null,
    mapLatitude,
    mapLongitude,
    mapZoom = 2,
    mapRefreshTime = 60,
  }) {
    this.eventId = eventId;
    this.eventName = eventName;
    this.eventStartDate = eventStartDate;
    this.eventEndDate = eventEndDate;
    this.mapLatitude = mapLatitude;
    this.mapLongitude = mapLongitude;
    this.mapZoom = mapZoom;
    this.mapRefreshTime = mapRefreshTime;
  }
}
