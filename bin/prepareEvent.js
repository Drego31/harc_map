const database = require('../lib/mongodb');
const utils = require('../lib/utils');

function removePointCategories () {
  return database.remove('point_categories_kO6f', { categoryId: { $in: [1, 2, 3] } })
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error.toString());
    });
}

function removeEvents () {
  return database.remove('events', { eventId: 'kO6f' })
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

function createPointCategories () {
  const categories = [
    {
      categoryId: 0,
      pointValue: 0,
      pointShape: 0,
    },
    {
      categoryId: 1,
      pointValue: 1,
      pointShape: 1,
    },
    {
      categoryId: 2,
      pointValue: 2,
      pointShape: 2,
    },
    {
      categoryId: 3,
      pointValue: 3,
      pointShape: 3,
    },
  ];

  return database.create('point_categories_kO6f', categories)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log('error');
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
  const permanentPoints = require('../points').pointsForDatabase();
  const temporaryPoints = require('../temporary-points').temporaryPointsForDatabase();
  const readyPoints = [];
  const points = permanentPoints.concat(temporaryPoints);

  Object.keys(points).forEach(index => {
    const point = points[index];
    point.pointId = utils.generateRandomString(4);
    point.pointType = point.pointType || 'permanent';
    point.pointName = point.pointName || 'Empty';
    point.pointExpirationTime = point.pointExpirationTime || null;
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

function prepareEvent () {
  removePointCategories()
    .then(removeEventPoints)
    .then(removeEvents)
    .then(createPointCategories)
    .then(createEvent)
    .then(createEventPoints)
    .then(() => {
      process.exit();
    });
}

/**
 * @details Points loader is module to load example data.
 * Call the function remove all data of points and events from database
 * and write example event and points for this from file PROJECT_DIR/points.js.
 */
prepareEvent();
