import { MapPoint } from 'src/structures/map-point';

export class AppEvent {
  constructor ({
    eventId = '',
    name = '',
    default_position = {},
    // eslint-disable-next-line camelcase
    default_zoom = 2,
    points = [],
  }) {
    this.eventId = eventId;
    this.name = name;
    this.defaultPosition = {
      latitude: default_position.latitude,
      longitude: default_position.longitude,
    };
    // eslint-disable-next-line camelcase
    this.defaultZoom = default_zoom;
    this.points = points.map(point => new MapPoint(point));
  }
}
