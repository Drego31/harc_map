export class MapPoint {
  constructor ({
    pointId,
    pointName,
    pointLongitude,
    pointLatitude,
    pointType,
    pointCategory,
    pointCollectionTime,
    pointExpirationTime,
  }) {
    this.pointId = pointId;
    this.pointName = pointName;
    this.pointLongitude = pointLongitude;
    this.pointLatitude = pointLatitude;
    this.pointType = pointType;
    this.pointCategory = pointCategory;
    this.pointCollectionTime = pointCollectionTime;
    this.pointExpirationTime = pointExpirationTime;
    this.olUid = null;
  }
}
