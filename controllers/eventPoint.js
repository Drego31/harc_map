const express = require('express');
const router = express.Router();
const validator = require('../lib/validator');
const database = require('../lib/mongodb');
const utils = require('../lib/utils');

function GetRequestDatabasePart (request, response, responseObject) {

  const json = request.query;
  const filters = {
    pointId: json.pointId,
  };

  const readPoint = database.read('event_' + json.eventId, filters);
  const readCategories = database.readMany('point_categories', {});

  // prepare response for client
  const ready = Promise.all([readPoint, readCategories]);
  ready.then(result => {

    const rawPoint = result[0];
    if (rawPoint === null) {
      utils.responseDatabaseNoData(response, responseObject);
      return;
    }

    const categoryIndex = rawPoint.pointCategory - 1;
    const category = result[1][categoryIndex];
    const point = Object.assign(rawPoint, category);
    delete point.pointCategory;
    delete point.categoryId;
    delete point._id;

    responseObject.point = point;
    response.send(responseObject);
  });

  ready.catch(error => {
    utils.responseDatabaseError(response, responseObject, error);
  });
}

function GetRequest (request, response) {

  const json = request.query;
  const error = validator.validate(
    validator.methods.validatePointGetRequest, json);

  const responseObject = {
    eventId: json.eventId ? json.eventId : null,
    point: null,
    error: error,
  };

  if (error) {
    response.send(responseObject);
    return;
  }

  GetRequestDatabasePart(request, response, responseObject);
}

function PostRequestDatabasePart (request, response, responseObject) {

  const json = request.body;
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

router.get('/', GetRequest);
router.post('/', PostRequest);
router.put('/', PutRequest);
module.exports = router;
