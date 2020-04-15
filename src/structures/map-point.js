export class MapPoint {
  constructor ({
    pointId,
    pointName,
    pointLongitude,
    pointLatitude,
    pointType,
    pointIsActive,
    pointCategory,
    pointCollectionTime,
    pointTimeout,

    // pointCategory: 1
    // pointCollectionTime: null
    // pointId: "kuu0"
    // pointIsActive: true
    // pointLatitude: 54.5309
    // pointLongitude: 18.4889
    // pointName: "Some point"
    // pointTimeout: 0
    // pointType: "permanent"
  }) {
    this.pointId = pointId;
    this.name = pointName;
    this.longitude = pointLongitude;
    this.latitude = pointLatitude;
    this.pointType = pointType;
    this.pointShape = pointCategory;
    this.pointIsActive = pointIsActive;
    // this.pointCategory = pointCategory;
    this.pointCollectionTime = pointCollectionTime;
    this.pointTimeout = pointTimeout;
    this.olUid = null;
  }
}
