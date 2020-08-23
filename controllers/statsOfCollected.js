const express = require('express');
const router = express.Router();
const validateCodes = require('../lib/validateCodes');
const database = require('../lib/mongodb');
const Endpoint = require('../lib/endpoint');

class GetRequestService extends Endpoint {

  readCategories (user, point) {

  }

  readPoints (user) {
    const collection = 'event_' + user.userEvents[0];
    const filters = { pointId: { $in: user.collectedPointsIds } };

    return database.readMany(collection, filters)
      .then(points => {
        return { user, points };
      });
  }

  readUsers () {
    return database.readMany('users', {})
      .then(users => {
        const promises = [];

        for (const user of users) {
          promises.push(this.readPoints(user));
        }

        return Promise.all(promises);
      });
  }

  readFromDatabase () {
    return this.readUsers()
      .then(response => {
        this.responseObject.response = response;
      });
  }

  endpointService () {
    return this.readFromDatabase()
      .then(() => { this.sendResponse(); });
  }

  preServiceOperations () {
  }

}

router.get('/', (request, response) => new GetRequestService(request, response, () => {}));
module.exports = router;
