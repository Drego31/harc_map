const express = require('express');
const router = express.Router();
const validator = require('../lib/validator');
const validateCodes = require('../lib/validateCodes');
const database = require('../lib/mongodb');
const Endpoint = require('../lib/endpoint');

class GetRequestService extends Endpoint {

  databasePart () {
    const json = this.getRequestJson();
    const categoryCollection = 'point_categories_' + json.eventId;

    return database.readMany(categoryCollection, {})
      .then(categories => {
        if (!(categories && categories.length)) {
          this.makeThrow(validateCodes.DATABASE_NO_RESULT_ERROR);
        }

        categories.forEach(category => { delete category._id; });
        this.responseObject.categories = categories;
        this.sendResponse();
      });
  }

  endpointService () {
    this.responseObject.categories = null;
    return this.databasePart();
  }

  getRequestJson () {
    return this.request.query;
  }

}

class PostRequestService extends Endpoint {

  databasePart () {
    const json = this.getRequestJson();
    const toSave = [];

    Object.keys(json.categories).forEach(index => {
      const category = json.categories[index];
      toSave.push({
        categoryId: category.categoryId,
        pointValue: category.pointValue,
        pointShape: category.pointShape,
      });
    });

    const categoryCollection = 'point_categories_' + json.eventId;
    return database.create(categoryCollection, toSave)
      .then(() => this.sendResponse());
  }

  endpointService () {
    return this.databasePart();
  }

}

class DeleteRequestService extends Endpoint {

  databasePart () {
    const json = this.getRequestJson();
    const categoryCollection = 'point_categories_' + json.eventId;

    return database.remove(categoryCollection, {})
      .then(() => this.sendResponse());
  }

  endpointService () {
    return this.databasePart();
  }

}

router.get('/', (request, response) => new GetRequestService(request, response, validator.methods.validatePointCategoriesGetRequest));
router.post('/', (request, response) => new PostRequestService(request, response, validator.methods.validatePointCategoriesPostRequest));
router.delete('/', (request, response) => new DeleteRequestService(request, response, validator.methods.validatePointCategoriesDeleteRequest));
module.exports = router;
