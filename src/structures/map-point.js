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
    this.id = pointId
    this.name = name
    this.position = {
      longitude,
      latitude,
    }
    this.type = type
  }
}
