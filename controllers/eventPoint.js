const express = require('express');
const router = express.Router();
const validator = require('../lib/validator');
const database = require('../lib/mongodb');
const utils = require('../lib/utils');

router.get('/', (request, response) => {
  const json = request.query;
  const error = validator.validate(
    validator.methods.validatePointGetRequest, json);

  let responseObject = {
    eventId: json.eventId ? json.eventId : null,
    error: error,
  };

  if (error) {
    response.send(responseObject);
    return;
  }

  const filters = {
    pointId: json.pointId,
  };

  database.read('event_' + json.eventId, filters)
    .then(result => {
      if (result === null) {
        utils.responseDatabaseNoData(response, responseObject);
        return;
      }
      responseObject = Object.assign(responseObject, result);
      delete responseObject._id;
      response.send(responseObject);
    })
    .catch(error => {
      utils.responseDatabaseError(response, responseObject, error);
    });
});

router.post('/', (request, response) => {
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

  const toSave = {
    pointId: json.point.pointId,
    pointName: json.point.pointName,
    pointLongitude: json.point.pointLongitude,
    pointLatitude: json.point.pointLatitude,
    pointType: json.point.pointType,
    pointValue: json.point.pointValue,
    pointShape: json.point.pointShape,
    pointIsActive: json.point.pointIsActive,
  };

  database.create('event_' + json.eventId, [toSave])
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
    validator.methods.validatePointPutRequest, json);

  const responseObject = {
    eventId: json.eventId ? json.eventId : null,
    error: error,
  };

  if (error) {
    response.send(responseObject);
    return;
  }

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
});

module.exports = router;
