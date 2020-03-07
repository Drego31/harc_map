const express = require('express');
const router = express.Router();
const validator = require('../lib/validator');
const database = require('../lib/mongodb');
const passport = require('passport');

router.get('/', (request, response) => {
  const json = request.query;
  const error = validator.validate(
    validator.validateEventGetRequest, json);

  response.send({
    eventId: json.eventId ? json.eventId : null,
    name: 'Event',
    mapPosition: {
      longitude: 54.23411,
      latitude: 158.21677,
    },
    mapZoom: 12.5,
    points: [
      {
        pointId: '1',
        name: 'Point 1',
        latitude: 54.51728,
        longitude: 18.51465,
        type: 3,
      },
      {
        pointId: '2',
        name: 'Point 2',
        latitude: 54.51111,
        longitude: 18.51173,
        type: 2,
      },
      {
        pointId: '3',
        name: 'Point 3',
        latitude: 54.51548,
        longitude: 18.54418,
        type: 3,
      },
      {
        pointId: '4',
        name: 'Point 4',
        latitude: 54.51851,
        longitude: 18.55863,
        type: 2,
      },
      {
        pointId: '5',
        name: 'Point 5',
        latitude: 54.49639,
        longitude: 18.56198,
        type: 1,
      },
      {
        pointId: '6',
        name: 'Point 6',
        latitude: 54.50585,
        longitude: 18.52872,
        type: 2,
      },
      {
        pointId: '7',
        name: 'Point 7',
        latitude: 54.48899,
        longitude: 18.49213,
        type: 1,
      },
    ],
    error: error,
  });
});

router.post('/', (request, response) => {
  const json = request.body;
  const error = validator.validate(
    validator.validateEventPostRequest, json);

  response.send({
    eventId: json.eventId ? json.eventId : null,
    error: error,
  });
});

router.put('/', (request, response) => {
  const json = request.body;
  const error = validator.validate(
    validator.validateEventPutRequest, json);

  response.send({
    eventId: json.eventId ? json.eventId : null,
    error: error,
  });
});

router.put('/collect/', (request, response) => {
  const json = request.body;
  const error = validator.validate(
    validator.validateEventCollectPutRequest, json);

  response.send({
    user: json.user ? json.user : null,
    error: error,
  });
});

module.exports = router;
