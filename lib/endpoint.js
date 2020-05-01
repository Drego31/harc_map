const validator = require('../lib/validator');
const validateCodes = require('../lib/validateCodes');
const database = require('../lib/mongodb');
const utils = require('../lib/utils');

class Endpoint {

  makeThrow (validationCode) {
    const error = new Error();
    error.name = 'ValidationError';
    error.validationCode = validationCode;
    throw error;
  }

  makeCatch (error) {
    if (error.name === 'MongoError') {
      utils.responseDatabaseError(
        this.response,
        this.responseObject,
        error,
      );
    }
    if (error.name === 'ValidationError') {
      this.responseObject.error = error.validationCode;
      this.response.status(500).send(this.responseObject);
    }
  }

  /**
   * @details Method for child classes to service.
   * All of things that should be done will be there.
   * @returns {Promise<void>}
   */

  endpointService () {
    throw new Error('Method `endpointService` is not implemented');
  }

  /**
   * @details Method to define JSON data from request.
   * For HTTP GET method should be return request.query
   * @returns {object}
   */

  getRequestJson () {
    return request.body;
  }

  service () {
    validator.validate(
      this.validateMethod(this.getRequestJson()));

    this.endpointService()
      .catch(error => this.makeCatch(error));
  }

  constructor (request, response, validateMethod) {
    this.request = request;
    this.response = response;
    this.validateMethod = validateMethod;
    this.responseObject = {};

    this.service();
  }

}

module.exports = Endpoint;
