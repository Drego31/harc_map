import { MapPoint } from 'src/structures/map-point';

export class AppEvent {
  constructor ({
    eventId = '',
    name = '',
    mapPosition = {},
    mapZoom = 2,
    points = [],
  }) {
    this.eventId = eventId;
    this.name = name;
    this.mapPosition = {
      latitude: mapPosition.latitude,
      longitude: mapPosition.longitude,
    };
    this.mapZoom = mapZoom;
    this.points = points.map(point => new MapPoint(point));
  }
}
