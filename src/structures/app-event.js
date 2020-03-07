import { MapPoint } from 'src/structures/map-point';

export class AppEvent {
  constructor ({
    eventId = '',
    name = '',
    defaultPosition = {},
    defaultZoom = 2,
    points = [],
  }) {
    this.eventId = eventId;
    this.name = name;
    this.defaultPosition = {
      latitude: defaultPosition.latitude,
      longitude: defaultPosition.longitude,
    };
    this.defaultZoom = defaultZoom;
    this.points = points.map(point => new MapPoint(point));
  }
}
