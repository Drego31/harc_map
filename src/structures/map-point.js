export class MapPoint {
  constructor ({
    pointId,
    name,
    longitude,
    latitude,
    type,
  }) {
    this.pointId = pointId;
    this.name = name;
    this.longitude = longitude;
    this.latitude = latitude;
    this.type = type;
    this.olUid = null;
  }
}
