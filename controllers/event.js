const express = require('express');
const router = express.Router();
const validator = require('../lib/validator');
const validateCodes = require('../lib/validateCodes');
const database = require('../lib/mongodb');
const utils = require('../lib/utils');
const Endpoint = require('../lib/endpoint');

class GetRequestService extends Endpoint {

  databasePart () {
    const json = this.getRequestJson();
    const eventCollection = 'events';
    const filters = { eventId: json.eventId };

    return database.read(eventCollection, filters)

      .then(event => {
        if (event === null) {
          this.makeThrow(validateCodes.DATABASE_NO_RESULT_ERROR);
        }

        this.responseObject = Object.assign(this.responseObject, event);
        delete this.responseObject._id;
        this.sendResponse();
      });
  }

  endpointService () {
    const json = this.getRequestJson();
    this.responseObject.eventId = json.eventId ? json.eventId : null;
    return this.databasePart();
  }

  getRequestJson () {
    return this.request.query;
  }

}

router.post('/', (request, response) => {
  const json = request.body;
  const error = validator.validate(
    validator.methods.validateEventPostRequest, json);

  const responseObject = {
    eventId: json.eventId ? json.eventId : null,
    error: error,
  };

  if (error) {
    response.send(responseObject);
    return;
  }

  const toSave = {
    eventId: json.eventId,
    eventName: json.eventName,
    mapLongitude: json.mapLongitude,
    mapLatitude: json.mapLatitude,
    mapZoom: json.mapZoom,
  };

  database.create('events', [toSave])
    .then(() => {
      response.send(responseObject);
    })
    .catch(error => {
      utils.responseDatabaseError(response, responseObject, error);
    });
});

router.put('/', (request, response) => {
  const json = request.body;
  const error = validator.validate(
    validator.methods.validateEventPutRequest, json);

  const responseObject = {
    eventId: json.eventId ? json.eventId : null,
    error: error,
  };

  if (error) {
    response.send(responseObject);
    return;
  }

  const filter = {
    eventId: json.eventId,
  };

  const toUpdate = {
    eventId: json.eventId,
    eventName: json.eventName,
    mapLongitude: json.mapLongitude,
    mapLatitude: json.mapLatitude,
    mapZoom: json.mapZoom,
  };

  database.update('events', filter, { $set: toUpdate })
    .then(() => {
      response.send(responseObject);
    })
    .catch(error => {
      utils.responseDatabaseError(response, responseObject, error);
    });
});

router.get('/', (request, response) => new GetRequestService(request, response, validator.methods.validateEventGetRequest));
// router.post('/', (request, response) => new PostRequestService(request, response, validator.methods.validatePointPostRequest));
// router.put('/', (request, response) => new PutRequestService(request, response, validator.methods.validatePointPutRequest));
module.exports = router;
