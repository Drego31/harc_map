const express = require('express');
const router = express.Router();
const validator = require('../lib/validator');
const database = require('../lib/mongodb');
const utils = require('../lib/utils');

router.get('/', (request, response) => {
  const json = request.query;
  const error = validator.validate(
    validator.methods.validatePointsGetRequest, json);

  const responseObject = {
    eventId: json.eventId ? json.eventId : null,
    points: [],
    error: error,
  };

  if (error) {
    response.send(responseObject);
    return;
  }

  database.readMany('event_' + json.eventId, {})
    .then(result => {
      if (!(result && result.length)) {
        utils.responseDatabaseNoData(response, responseObject);
        return;
      }
      result.forEach(point => { delete point._id; });
      responseObject.points = result;
      response.send(responseObject);
    })
    .catch(error => {
      utils.responseDatabaseError(response, responseObject, error);
    });
});

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

module.exports = router;
