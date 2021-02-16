var { parse } = require('json2csv');
var fs = require('fs');

const database = require('../lib/mongodb');

// const eventId = 'ab12';
const eventId = 'kO6f';

database.readMany(`point_categories_${eventId}`, {})
  .then(categories => {
    database.readMany(`event_${eventId}`, {})
      .then(points => {
        return points.map(point => {
          const {
            pointId,
            pointLatitude,
            pointLongitude,
            pointType,
            pointCategory,
          } = point;

          const pointCategoryObject = categories.find(category => category.categoryId === pointCategory);

          return {
            pointId,
            pointLatitude,
            pointLongitude,
            pointType,
            pointValue: pointCategoryObject.pointValue,
          };
        });
      })
      .then(preparedPoints => parse(preparedPoints))
      .then(parsedPoints => {
        return fs.writeFileSync(`points_of_${eventId}.csv`, parsedPoints, 'binary');
      })
      .catch(error => {
        throw new Error(error);
      });
  })
  .catch(error => {
    console.error(error);
  });
