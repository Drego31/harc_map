const express = require('express');
const router = express.Router();
const validator = require('../lib/validator');
const validateCodes = require('../lib/validateCodes');
const database = require('../lib/mongodb');
const Endpoint = require('../lib/endpoint');

class PutRequestService extends Endpoint {

  databasePart () {
    const json = this.getRequestJson();
    const userCollection = 'users';
    const eventCollection = 'events';
    const pointsCollection = 'event_' + json.eventId;

    const eventFilter = { eventId: json.eventId };
    const pointFilter = { pointId: json.pointId };
    const userFilter = { user: json.user };

    return database.read(eventCollection, eventFilter)

      .then(result => this.makeThrowIf(result === null, validateCodes.DATABASE_NO_RESULT_ERROR))
      .then(() => database.read(pointsCollection, pointFilter))

      .then(result => this.makeThrowIf(result === null, validateCodes.DATABASE_NO_RESULT_ERROR))
      .then(() => database.read(userCollection, userFilter))

      .then(user => {
        if (user === null) {
          this.makeThrow(validateCodes.DATABASE_NO_RESULT_ERROR);
        }
        if (user.collectedPointsIds.includes(json.pointId)) {
          this.makeThrow(validateCodes.DATABASE_DATA_CONFLICT_ERROR);
        }
        user.collectedPointsIds.push(json.pointId);
        return database.update(userCollection, userFilter, user);
      })

      .then(() => this.sendResponse());
  }

  endpointService () {
    const json = this.getRequestJson();
    this.responseObject.user = json.user ? json.user : null;
    return this.databasePart();
  }

}

router.put('/', (request, response) => new PutRequestService(request, response, validator.methods.validateEventCollectPutRequest));
module.exports = router;
