const express = require('express');
const router = express.Router();
const validator = require('../lib/validator');
const database = require('../lib/mongodb');
const Endpoint = require('../lib/endpoint');

class GetRequestService extends Endpoint {

  readCategories (user, point) {
    const collection = 'point_categories_' + user.userEvents[0];
    const filters = { categoryId: point.pointCategory };

    return database.read(collection, filters)
      .then(category => {
        delete category._id;
        point.category = category;
      });
  }

  calculateCollectedSum (points) {
    let sum = 0;
    for (const point of points) {
      sum += point.category.pointValue;
    }

    return sum;
  }

  readPoints (user) {
    const collection = 'event_' + user.userEvents[0];
    const filters = { pointId: { $in: user.collectedPointsIds } };

    return database.readMany(collection, filters)
      .then(points => {
        const promises = [];

        for (const point of points) {
          delete point._id;
          promises.push(this.readCategories(user, point));
        }

        return Promise.all(promises)
          .then(() => {
            return {
              user,
              collected: points,
              collectedSum: this.calculateCollectedSum(points),
            };
          });
      });
  }

  readUsers () {
    return database.readMany('users', {})
      .then(users => {
        const promises = [];

        for (const user of users) {
          delete user._id;
          delete user.password;
          promises.push(this.readPoints(user));
        }

        return Promise.all(promises);
      });
  }

  readFromDatabase () {
    return this.readUsers()
      .then(response => {
        this.responseObject.stats = response;
      });
  }

  endpointService () {
    return this.readFromDatabase()
      .then(() => { this.sendResponse(); });
  }

  preServiceOperations () {
    if (this.isNotSuperUser()) {
      this.responseObject.error = validator
        .validateCodes.UNAUTHORIZED_ACCESS;
    }
  }

}

router.get('/', (request, response) => new GetRequestService(request, response, () => {}));
module.exports = router;
