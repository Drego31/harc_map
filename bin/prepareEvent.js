const database = require('../lib/mongodb');
const utils = require('../lib/utils');

function removePointCategories () {
  return database.remove('point_categories_ks6f', { categoryId: { $in: [1, 2, 3] } })
    .then(result => {
      // console.log(result);
    })
    .catch(error => {
      console.log(error.toString());
    });
}

function removeEvents () {
  return database.remove('events', { eventId: 'ks6f' })
    .then(result => {
      // console.log(result);
    }).catch(error => {
      console.log(error.toString());
    });
}

function removeEventPoints () {
  return database.remove('event_ks6f', {})
    .then(result => {
      // console.log(result);
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
      pointType: 'timeout',
    },
    {
      categoryId: 1,
      pointValue: 1,
      pointShape: 1,
      pointType: 'permanent',
    },
    {
      categoryId: 2,
      pointValue: 2,
      pointShape: 2,
      pointType: 'permanent',
    },
    {
      categoryId: 3,
      pointValue: 3,
      pointShape: 3,
      pointType: 'permanent',
    },
  ];

  return database.create('point_categories_ks6f', categories)
    .then(result => {
      // console.log(result);
    })
    .catch(error => {
      console.log('error');
      console.log(error.toString());
    });
}

function createEvent () {
  const event = {
    eventId: 'ks6f',
    eventName: 'Rajd „Tajna Lilijka”',
    eventStartDate: (new Date('2021-03-27T09:00')).getTime(),
    eventEndDate: (new Date('2021-03-27T16:00')).getTime(),
    mapZoom: 11,
    mapLongitude: 18.4735,
    mapLatitude: 54.4787,
    mapRefreshTime: 60 * 15,
  };

  return database.create('events', [event])
    .then(result => {
      // console.log(result);
    })
    .catch(error => {
      console.log('error');
      console.log(error.toString());
    });
}

function generateUniqueId (storeArray, length) {
  let generatedId = utils.generateRandomStringWithoutSimilarChars(length);

  // is unique
  if (storeArray.indexOf(generatedId) < 0) {
    storeArray.push(generatedId);
  } else {
    console.error('conflict:', generatedId);
    generatedId = generateUniqueId(storeArray);
    console.error('conflict new:', generatedId);
  }

  return generatedId;
}

function createEventPoints () {
  const permanentPoints = require('../points').pointsForDatabase();
  const timeoutPoints = require('../timeout-points').timeoutPointsForDatabase();
  const readyPoints = [];
  const points = permanentPoints.concat(timeoutPoints);
  const pointsIds = [];

  Object.keys(points).forEach(index => {
    const point = points[index];
    point.pointId = generateUniqueId(pointsIds, 4);
    point.pointType = point.pointType || 'permanent';
    point.pointName = point.pointName || '';
    point.pointAppearanceTime = point.pointAppearanceTime || null;
    point.pointExpirationTime = point.pointExpirationTime || null;
    point.pointCollectionTime = null;
    readyPoints.push(point);
  });

  return database.create('event_ks6f', readyPoints)
    .then(result => {
      // console.log(result);
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
