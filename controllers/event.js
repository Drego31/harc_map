const express = require('express');
const router = express.Router();
const validator = require('../lib/validator');
const database = require('../lib/mongodb');

// function randomString (length) {
//   var result = '';
//   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var charactersLength = characters.length;
//   for (var i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// }
//
// function removeEvents () {
//   database.remove('events', {})
//     .then(result => {
//       console.log(result);
//     }).catch(error => {
//       console.log(error.toString());
//     });
// }
//
// function removeEventPoints () {
//   database.remove('event_kO6f', {})
//     .then(result => {
//       console.log(result);
//     })
//     .catch(error => {
//       console.log(error.toString());
//     });
// }
//
// function loadPoints () {
//   // removeEventPoints();
//   // removeEvents();
//
//   const points = require('../points').pointsForDatabase();
//   const readyPoints = [];
//   for (const index in points) {
//     const point = points[index];
//     point.pointId = randomString(4);
//     point.pointType = 'permanent';
//     point.pointIsActive = true;
//     point.pointName = 'Some point';
//     point.pointTimeout = 0;
//     point.pointCollectionTime = null;
//     readyPoints.push(point);
//   }
//
//   database.create('events', [{
//     eventId: 'kO6f',
//     eventName: 'Event',
//     mapZoom: 11,
//     mapLongitude: 18.4735,
//     mapLatitude: 54.4787,
//   }]).then(result => {
//     console.log(result);
//   }).catch(error => {
//     console.log('error');
//     console.log(error.toString());
//   });
//
//   database.create('event_kO6f', readyPoints)
//     .then(result => {
//       console.log(result);
//     }).catch(error => {
//       console.log('error');
//       console.log(error.toString());
//     });
// }

function databaseErrorResponse (response, responseObject, error) {
  responseObject.error = validator.ValidateCodes.DATABASE_PROBLEM;
  responseObject.errorDetails = error.toString();
  response.send(responseObject);
}

router.get('/', (request, response) => {
  const json = request.query;
  const error = validator.validate(
    validator.methods.validateEventGetRequest, json);

  let responseObject = {
    eventId: json.eventId ? json.eventId : null,
    error: error,
  };

  if (error) {
    response.send(responseObject);
    return;
  }

  database.read('events', { eventId: json.eventId })
    .then(result => {
      responseObject = Object.assign(responseObject, result);
      delete responseObject._id;
      response.send(responseObject);
    })
    .catch(error => {
      databaseErrorResponse(response, responseObject, error);
    });
});

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
    .then(result => {
      response.send(responseObject);
    })
    .catch(error => {
      databaseErrorResponse(response, responseObject, error);
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
    .then(result => {
      response.send(responseObject);
    })
    .catch(error => {
      databaseErrorResponse(response, responseObject, error);
    });
});

router.get('/point/', (request, response) => {
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
      responseObject = Object.assign(responseObject, result);
      delete responseObject._id;
      response.send(responseObject);
    })
    .catch(error => {
      databaseErrorResponse(response, responseObject, error);
    });
});

router.post('/point/', (request, response) => {
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
    .then(result => {
      response.send(responseObject);
    })
    .catch(error => {
      databaseErrorResponse(response, responseObject, error);
    });
});

router.put('/point/', (request, response) => {
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
    .then(result => {
      response.send(responseObject);
    })
    .catch(error => {
      databaseErrorResponse(response, responseObject, error);
    });
});

router.get('/points/', (request, response) => {
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
      result.forEach(point => { delete point._id; });
      responseObject.points = result;
      response.send(responseObject);
    })
    .catch(error => {
      databaseErrorResponse(response, responseObject, error);
    });
});

router.post('/points/', (request, response) => {
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
  for (const index in json.points) {
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
  }

  database.create('event_' + json.eventId, toSave)
    .then(result => {
      response.send(responseObject);
    })
    .catch(error => {
      databaseErrorResponse(response, responseObject, error);
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
