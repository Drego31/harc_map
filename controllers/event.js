const express = require('express');
const router = express.Router();
const validator = require('../lib/validator');
// const database = require('../lib/mongodb');

router.get('/', (request, response) => {
  response.send({
    error: null,
    eventId: '1234',
    name: 'Event',
    mapPosition: {
      latitude: 54.4787,
      longitude: 18.4735,
    },
    mapZoom: 11,
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
  });
});

router.post('/', (request, response) => {
  response.send({
    eventId: '1234',
    error: null,
  });
});

router.put('/', (request, response) => {
  response.send({
    eventId: '1234',
    error: null,
  });
});

router.put('/collect/', (request, response) => {
  response.send({
    user: 'example@example.com',
    error: null,
  });
});

module.exports = router;
