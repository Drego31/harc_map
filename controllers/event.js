const express = require('express');
const router = express.Router();
const validator = require('../lib/validator');
const database = require('../lib/mongodb');

// database.read('events', {
//   eventId: 'kO6f',
// }).then(result => {
//   console.log(result);
//   response.send(result);
// }).catch(error => {
//   console.log('error');
//   response.status(404).send(error);
// });

// database.create('events', [{
//   eventId: 'kO6f',
//   eventName: 'Event',
//   defaultZoom: 11,
//   defaultLongitude: 18.4735,
//   defaultLatitude: 54.4787,
// }]).then(result => {
//   console.log(result);
//   response.send(result);
// }).catch(error => {
//   console.log('error');
//   response.status(404).send(error);
// });

// database.remove('event_kO6f', {}).then(result => {
//   console.log(result);
//   response.send(result);
// }).catch(error => {
//   console.log('error');
//   response.status(404).send(error);
// });

router.get('/', (request, response) => {
  const json = request.query;
  const error = validator.validate(
    validator.methods.validateEventGetRequest, json);

  const responseObject = {
    eventId: json.eventId ? json.eventId : null,
    eventName: '',
    mapPosition: {
      latitude: 0,
      longitude: 0,
    },
    mapZoom: 0,
    points: [],
    error: error,
  };

  database.read('events', { eventId: json.eventId })
    .then(result => {
      responseObject.eventName = result.eventName;
      responseObject.mapPosition.latitude = result.defaultLatitude;
      responseObject.mapPosition.longitude = result.defaultLongitude;
      responseObject.mapZoom = result.defaultZoom;
      database.readMany('event_' + json.eventId, {})
        .then(result => {
          responseObject.points = result;
          response.send(responseObject);
        })
        .catch(error => {
          response.send(responseObject);
        });
    })
    .catch(error => {
      response.send(responseObject);
    });
});

router.post('/', (request, response) => {
  const json = request.body;
  const error = validator.validate(
    validator.methods.validateEventPostRequest, json);

  response.send({
    eventId: json.eventId ? json.eventId : null,
    error: error,
  });
});

router.put('/', (request, response) => {
  const json = request.body;
  const error = validator.validate(
    validator.methods.validateEventPutRequest, json);

  response.send({
    eventId: json.eventId ? json.eventId : null,
    error: error,
  });
});

router.put('/collect/', (request, response) => {
  const json = request.body;
  const error = validator.validate(
    validator.methods.validateEventCollectPutRequest, json);

  response.send({
    user: json.user ? json.user : null,
    error: error,
  });
});

module.exports = router;
