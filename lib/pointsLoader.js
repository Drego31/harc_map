const database = require('./mongodb');

function randomString (length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function removeEvents () {
  return database.remove('events', {})
    .then(result => {
      console.log(result);
    }).catch(error => {
      console.log(error.toString());
    });
}

function removeEventPoints () {
  return database.remove('event_kO6f', {})
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error.toString());
    });
}

function createEvent () {
  const event = {
    eventId: 'kO6f',
    eventName: 'Event',
    mapZoom: 11,
    mapLongitude: 18.4735,
    mapLatitude: 54.4787,
  };

  return database.create('events', [event])
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log('error');
      console.log(error.toString());
    });
}

function createEventPoints () {
  const points = require('../points').pointsForDatabase();
  const readyPoints = [];

  Object.keys(points).forEach(index => {
    const point = points[index];
    point.pointId = randomString(4);
    point.pointType = 'permanent';
    point.pointIsActive = true;
    point.pointName = 'Some point';
    point.pointTimeout = 0;
    point.pointCollectionTime = null;
    readyPoints.push(point);
  });

  return database.create('event_kO6f', readyPoints)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log('error');
      console.log(error.toString());
    });
}

function loadPoints () {
  removeEventPoints()
    .then(removeEvents)
    .then(createEvent)
    .then(createEventPoints);
}

module.exports = {
  loadPoints,
};
