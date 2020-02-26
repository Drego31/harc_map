export class MapPoint {
  constructor ({
    pointId,
    name,
    position: {
      longitude,
      latitude,
    },
    type,
  }) {
    this.pointId = pointId;
    this.name = name;
    this.position = {
      longitude,
      latitude,
    };
    this.type = type;
    this.ol_uid = null;
  }
}
