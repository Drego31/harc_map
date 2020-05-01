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




function PutRequestDatabasePart (request, response, responseObject) {

  const json = request.body;
  const filters = {
    pointId: json.pointId,
  };

  const toUpdate = {
    pointId: json.point.pointId,
    pointName: json.point.pointName,
    pointLongitude: json.point.pointLongitude,
    pointLatitude: json.point.pointLatitude,
    pointType: json.point.pointType,
    pointValue: json.point.pointValue,
    pointShape: json.point.pointShape,
    pointIsActive: json.point.pointIsActive,
  };

  database.update('event_' + json.eventId, filters, { $set: toUpdate })
    .then(() => {
      response.send(responseObject);
    })
    .catch(error => {
      utils.responseDatabaseError(response, responseObject, error);
    });
}

function PutRequest (request, response) {

  const json = request.body;
  const error = validator.validate(
    validator.methods.validatePointPutRequest, json);

  const responseObject = {
    eventId: json.eventId ? json.eventId : null,
    error: error,
  };

  if (error) {
    response.send(responseObject);
    return;
  }

  PutRequestDatabasePart(request, response, responseObject);
}

router.get('/', (request, response) => new GetRequestService(request, response, validator.methods.validatePointGetRequest));
router.post('/', (request, response) => new PostRequestService(request, response, validator.methods.validatePointPostRequest));
router.put('/', PutRequest);
module.exports = router;
