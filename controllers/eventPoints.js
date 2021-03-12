const express = require('express');
const router = express.Router();
const validator = require('../lib/validator');
const validateCodes = require('../lib/validateCodes');
const database = require('../lib/mongodb');
const Endpoint = require('../lib/endpoint');

class GetRequestService extends Endpoint {

  databasePart () {
    const json = this.getRequestJson();
    const pointsCollection = 'event_' + json.eventId;

    return database.readMany(pointsCollection, {})

      .then(points => {
        if (!(points && points.length)) {
          this.makeThrow(validateCodes.DATABASE_NO_RESULT_ERROR);
        }

        points.forEach(point => { delete point._id; });
        this.responseObject.points = points;
        this.sendResponse();
      });
  }

  endpointService () {
    const json = this.getRequestJson();
    this.responseObject.eventId = json.eventId ? json.eventId : null;
    this.responseObject.points = [];
    return this.databasePart();
  }

  getRequestJson () {
    return this.request.query;
  }

}

class PostRequestService extends Endpoint {

  pointsIds (points) {
    const list = [];
    Object.keys(points).forEach(index => {
      list.push(points[index].pointId);
    });

    return list;
  }

  databasePart () {
    const json = this.getRequestJson();
    const toSave = [];

    Object.keys(json.points).forEach(index => {
      const point = json.points[index];
      toSave.push({
        pointId: point.pointId,
        pointType: point.pointType,
        pointName: point.pointName,
        pointAppearanceTime: point.pointAppearanceTime,
        pointExpirationTime: point.pointExpirationTime,
        pointCollectionTime: point.pointCollectionTime,
        pointLongitude: point.pointLongitude,
        pointLatitude: point.pointLatitude,
        pointCategory: point.pointCategory,
      });
    });

    const pointsCollection = 'event_' + json.eventId;
    const eventFilter = { eventId: json.eventId };
    const pointFilter = { pointId: this.pointsIds(json.points) };

    return database.read('events', eventFilter)

      .then(result => this.makeThrowIf(result === null, validateCodes.DATABASE_NO_RESULT_ERROR))
      .then(() => database.read(pointsCollection, pointFilter))

      .then(result => this.makeThrowIf(result !== null, validateCodes.DATABASE_DATA_CONFLICT_ERROR))
      .then(() => database.create(pointsCollection, toSave))
      .then(() => this.sendResponse());
  }

  endpointService () {
    const json = this.getRequestJson();
    this.responseObject.eventId = json.eventId ? json.eventId : null;
    return this.databasePart();
  }

}

router.get('/', (request, response) => new GetRequestService(request, response, validator.methods.validatePointsGetRequest));
router.post('/', (request, response) => new PostRequestService(request, response, validator.methods.validatePointsPostRequest));
module.exports = router;
