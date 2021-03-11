const express = require('express');
const router = express.Router();
const validator = require('../lib/validator');
const validateCodes = require('../lib/validateCodes');
const database = require('../lib/mongodb');
const Endpoint = require('../lib/endpoint');

class PutRequestService extends Endpoint {

  databasePartValidateEvent (event) {
    this.makeThrowIf(event === null, validateCodes.DATABASE_NO_RESULT_ERROR);
    this.makeThrowIf(event.eventStartDate > Date.now(), validateCodes.EVENT_BEFORE_START_DATE);
    this.makeThrowIf(event.eventEndDate < Date.now(), validateCodes.EVENT_IS_OUT_OF_DATE);
  }

  databasePartValidatePoint (point) {
    this.makeThrowIf(point === null, validateCodes.DATABASE_NO_RESULT_ERROR);
    this.makeThrowIf(point.pointCollectionTime !== null, validateCodes.POINT_ALREADY_COLLECTED);
  }

  databasePartValidateUser (user) {
    const json = this.getRequestJson();
    this.makeThrowIf(user === null, validateCodes.DATABASE_NO_RESULT_ERROR);
    if (user.collectedPointsIds.includes(json.pointId)) {
      this.makeThrow(validateCodes.DATABASE_DATA_CONFLICT_ERROR);
    }
  }

  databasePartUpdateUser (collection, filter, toUpdate) {
    const json = this.getRequestJson();
    toUpdate.collectedPointsIds.push(json.pointId);
    return database.update(collection, filter, toUpdate);
  }

  databasePartUpdatePoint (collection, filter, toUpdate) {
    toUpdate.pointCollectionTime = Date.now();
    return database.update(collection, filter, toUpdate);
  }

  databasePart () {
    const json = this.getRequestJson();
    let pointToUpdate = null;
    let userToUpdate = null;

    const userCollection = 'users';
    const eventCollection = 'events';
    const pointsCollection = 'event_' + json.eventId;

    const eventFilter = { eventId: json.eventId };
    const pointFilter = { pointId: json.pointId };
    const userFilter = { user: json.user };

    return database.read(eventCollection, eventFilter)
      .then(event => this.databasePartValidateEvent(event))

      .then(() => database.read(pointsCollection, pointFilter))
      .then(point => {
        this.databasePartValidatePoint(point);
        pointToUpdate = point;
      })

      .then(() => database.read(userCollection, userFilter))
      .then(user => {
        this.databasePartValidateUser(user);
        userToUpdate = user;
      })

      .then(() => this.databasePartUpdateUser(userCollection, userFilter, userToUpdate))
      .then(() => this.databasePartUpdatePoint(pointsCollection, pointFilter, pointToUpdate))
      .then(() => {
        this.responseObject.pointCollectionTime = pointToUpdate.pointCollectionTime;
        this.sendResponse();
      });
  }

  endpointService () {
    const json = this.getRequestJson();
    this.responseObject.user = json.user ? json.user : null;
    return this.databasePart();
  }

}

router.put('/', (request, response) => new PutRequestService(request, response, validator.methods.validateEventCollectPutRequest));
module.exports = router;
