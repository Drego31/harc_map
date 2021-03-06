export class MapPoint {
  constructor ({
    pointId,
    pointName,
    pointLongitude,
    pointLatitude,
    pointType,
    pointCategory,
    pointCollectionTime,
    pointAppearanceTime,
    pointExpirationTime,
  }) {
    this.pointId = pointId;
    this.pointName = pointName;
    this.pointLongitude = pointLongitude;
    this.pointLatitude = pointLatitude;
    this.pointType = pointType;
    this.pointCategory = pointCategory;
    this.pointCollectionTime = pointCollectionTime;
    this.pointAppearanceTime = pointAppearanceTime;
    this.pointExpirationTime = pointExpirationTime;
    this.olUid = null;
  }
}
