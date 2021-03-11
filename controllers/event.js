const express = require('express');
const router = express.Router();
const validator = require('../lib/validator');
const validateCodes = require('../lib/validateCodes');
const database = require('../lib/mongodb');
const Endpoint = require('../lib/endpoint');

class GetRequestService extends Endpoint {

  databasePart () {
    const json = this.getRequestJson();
    const eventCollection = 'events';
    const filters = { eventId: json.eventId };

    return database.read(eventCollection, filters)
      .then(event => {
        if (!event) {
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

class PostRequestService extends Endpoint {

  databasePart () {
    const json = this.getRequestJson();
    const toSave = {
      eventId: json.eventId,
      eventName: json.eventName,
      eventStartDate: json.eventStartDate,
      eventEndDate: json.eventEndDate,
      mapLongitude: json.mapLongitude,
      mapLatitude: json.mapLatitude,
      mapZoom: json.mapZoom,
      mapRefreshTime: json.mapRefreshTime,
    };

    const eventCollection = 'events';
    const eventFilter = { eventId: json.eventId };

    return database.read(eventCollection, eventFilter)

      .then(result => this.makeThrowIf(result !== null, validateCodes.DATABASE_DATA_CONFLICT_ERROR))
      .then(() => database.create(eventCollection, [toSave]))
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
      eventId: json.eventId,
      eventName: json.eventName,
      eventStartDate: json.eventStartDate,
      eventEndDate: json.eventEndDate,
      mapLongitude: json.mapLongitude,
      mapLatitude: json.mapLatitude,
      mapZoom: json.mapZoom,
      mapRefreshTime: json.mapRefreshTime,
    };

    const eventCollection = 'events';
    const eventFilter = { eventId: json.eventId };

    return database.read(eventCollection, eventFilter)

      .then(result => this.makeThrowIf(result === null, validateCodes.DATABASE_NO_RESULT_ERROR))
      .then(() => database.update(eventCollection, eventFilter, toUpdate))
      .then(() => this.sendResponse());
  }

  endpointService () {
    const json = this.getRequestJson();
    this.responseObject.eventId = json.eventId ? json.eventId : null;
    return this.databasePart();
  }

}

router.get('/', (request, response) => new GetRequestService(request, response, validator.methods.validateEventGetRequest));
router.post('/', (request, response) => new PostRequestService(request, response, validator.methods.validateEventPostRequest));
router.put('/', (request, response) => new PutRequestService(request, response, validator.methods.validateEventPutRequest));
module.exports = router;
