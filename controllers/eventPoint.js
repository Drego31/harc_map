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

    // prepare response for client
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






function Throw (validationCode) {
  const error = new Error();
  error.name = 'ValidationError';
  error.validationCode = validationCode;
  throw error;
}

function Catch (response, responseObject, error) {
  if (error.name === 'MongoError') {
    utils.responseDatabaseError(response, responseObject, error);
  }
  if (error.name === 'ValidationError') {
    responseObject.error = error.validationCode;
    utils.status(500).send(response, responseObject);
  }
}

function PostRequestDatabasePart (request, response, responseObject) {

  const json = request.body;
  const toSave = {
    pointId: json.point.pointId,
    pointType: json.point.pointType,
    pointName: json.point.pointName,
    pointExpirationTime: json.pointExpirationTime,
    pointCollectionTime: json.pointCollectionTime,
    pointLongitude: json.pointLongitude,
    pointLatitude: json.pointLatitude,
    pointCategory: json.pointCategory,
  };

  const pointsCollection = 'event_' + json.eventId;
  const eventFilter = { eventId: json.eventId };
  const pointFilter = { pointId: json.pointId };

  database.read('events', eventFilter)

    .then(result => (result === null) ? Throw(validateCodes.DATABASE_NO_RESULT_ERROR) : undefined)
    .then(() => database.read(pointsCollection, pointFilter))

    .then(result => (result !== null) ? Throw(validateCodes.DATABASE_DATA_CONFLICT_ERROR) : undefined)
    .then(() => database.create(pointsCollection, [toSave]))
    .then(() => response.send(responseObject))

    // error service
    .catch(error => {
      if (error.name === 'MongoError') {
        utils.responseDatabaseError(response, responseObject, error);
      }
      if (error.name === 'ValidationError') {
        responseObject.error = error.validationCode;
        utils.responseDatabaseNoData(response, responseObject);
      }
    });
}

function PostRequest (request, response) {

  const json = request.body;
  const error = validator.validate(
    validator.methods.validatePointPostRequest, json);

  const responseObject = {
    eventId: json.eventId ? json.eventId : null,
    error: error,
  };

  if (error) {
    response.send(responseObject);
    return;
  }

  PostRequestDatabasePart(request, response, responseObject);
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
router.post('/', PostRequest);
router.put('/', PutRequest);
module.exports = router;
