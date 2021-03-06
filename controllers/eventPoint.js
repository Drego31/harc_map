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
    const filters = { pointId: json.pointId };

    return database.read(pointsCollection, filters)

      .then(point => {
        if (point === null) {
          this.makeThrow(validateCodes.DATABASE_NO_RESULT_ERROR);
        }

        delete point._id;
        this.responseObject.point = point;
        this.sendResponse();
      });
  }

  endpointService () {
    const json = this.getRequestJson();
    this.responseObject.eventId = json.eventId ? json.eventId : null;
    this.responseObject.point = null;
    return this.databasePart();
  }

  getRequestJson () {
    return this.request.query;
  }

}

class PostRequestService extends Endpoint {

  databasePart () {
    const json = this.getRequestJson();
    const toSave = {
      pointId: json.point.pointId,
      pointType: json.point.pointType,
      pointName: json.point.pointName,
      pointAppearanceTime: json.point.pointAppearanceTime,
      pointExpirationTime: json.point.pointExpirationTime,
      pointCollectionTime: json.point.pointCollectionTime,
      pointLongitude: json.point.pointLongitude,
      pointLatitude: json.point.pointLatitude,
      pointCategory: json.point.pointCategory,
    };

    const pointsCollection = 'event_' + json.eventId;
    const eventFilter = { eventId: json.eventId };
    const pointFilter = { pointId: json.point.pointId };

    return database.read('events', eventFilter)

      .then(result => this.makeThrowIf(result === null, validateCodes.DATABASE_NO_RESULT_ERROR))
      .then(() => database.read(pointsCollection, pointFilter))

      .then(result => this.makeThrowIf(result !== null, validateCodes.DATABASE_DATA_CONFLICT_ERROR))
      .then(() => database.create(pointsCollection, [toSave]))
      .then(() => this.sendResponse());
  }

  endpointService () {
    const json = this.getRequestJson();
    this.responseObject.eventId = json.eventId ? json.eventId : null;
    return this.databasePart();
  }

}

class PutRequestService extends Endpoint {

  databasePart () {
    const json = this.getRequestJson();
    const toUpdate = {
      pointId: json.point.pointId,
      pointType: json.point.pointType,
      pointName: json.point.pointName,
      pointAppearanceTime: json.point.pointAppearanceTime,
      pointExpirationTime: json.point.pointExpirationTime,
      pointCollectionTime: json.point.pointCollectionTime,
      pointLongitude: json.point.pointLongitude,
      pointLatitude: json.point.pointLatitude,
      pointCategory: json.point.pointCategory,
    };

    const pointsCollection = 'event_' + json.eventId;
    const eventFilter = { eventId: json.eventId };
    const pointFilter = { pointId: json.point.pointId };

    return database.read('events', eventFilter)

      .then(result => this.makeThrowIf(result === null, validateCodes.DATABASE_NO_RESULT_ERROR))
      .then(() => database.read(pointsCollection, pointFilter))

      .then(result => this.makeThrowIf(result === null, validateCodes.DATABASE_NO_RESULT_ERROR))
      .then(() => database.update(pointsCollection, pointFilter, toUpdate))
      .then(() => this.sendResponse());
  }

  endpointService () {
    const json = this.getRequestJson();
    this.responseObject.eventId = json.eventId ? json.eventId : null;
    return this.databasePart();
  }

}

router.get('/', (request, response) => new GetRequestService(request, response, validator.methods.validatePointGetRequest));
router.post('/', (request, response) => new PostRequestService(request, response, validator.methods.validatePointPostRequest));
router.put('/', (request, response) => new PutRequestService(request, response, validator.methods.validatePointPutRequest));
module.exports = router;
