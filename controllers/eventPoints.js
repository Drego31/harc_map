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

router.post('/', (request, response) => {
  const json = request.body;
  const error = validator.validate(
    validator.methods.validatePointsPostRequest, json);

  const responseObject = {
    eventId: json.eventId ? json.eventId : null,
    error: error,
  };

  if (error) {
    response.send(responseObject);
    return;
  }

  const toSave = [];
  Object.keys(json.points).forEach(index => {
    const point = json.points[index];
    toSave.push({
      pointId: point.pointId,
      pointName: point.pointName,
      pointLongitude: point.pointLongitude,
      pointLatitude: point.pointLatitude,
      pointType: point.pointType,
      pointValue: point.pointValue,
      pointShape: point.pointShape,
      pointIsActive: point.pointIsActive,
    });
  });

  database.create('event_' + json.eventId, toSave)
    .then(() => {
      response.send(responseObject);
    })
    .catch(error => {
      utils.responseDatabaseError(response, responseObject, error);
    });
});

router.get('/', (request, response) => new GetRequestService(request, response, validator.methods.validatePointsGetRequest));
module.exports = router;
