const validator = require('../lib/validator');
const utils = require('../lib/utils');
const { logical } = require('../vendors/logical');

class Endpoint {

  makeThrow (validationCode) {
    const error = new Error();
    error.name = 'ValidationError';
    error.validationCode = validationCode;
    throw error;
  }

  makeThrowIf (condition, validationCode) {
    if (condition) {
      this.makeThrow(validationCode);
    }
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
      this.sendResponse();
    }
  }

  sendResponse (code = 200, object = this.responseObject) {
    this.response.status(code).send(object);
  }

  isAuthenticated () {
    return this.request.isAuthenticated();
  }

  isSuperUser () {
    if (logical.isObjectEmpty(this.session)) {
      return false;
    }

    return this.session.accountType === 'admin';
  }

  isNotSuperUser () {
    return !this.isSuperUser();
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
   * @details Method for validate user permissions (e.g. by session)
   * @return {boolean}
   */

  validateUserEvents () {
    const json = this.getRequestJson();
    const events = this.session.userEvents;
    return events.includes(json.eventId);
  }

  /**
   * @details If endpoint has to call validate method.
   * @return {boolean}
   */

  hasToValidatedMethod () {
    return true;
  }

  /**
   * @details If endpoint has to check user authentication.
   * Check only if user is sign in by session to server site.
   * @return {boolean}
   */

  hasToAuthenticated () {
    return true;
  }

  /**
   * @details Method to define JSON data from request.
   * For HTTP GET method should be return `this.request.query`.
   * @returns {object}
   */

  getRequestJson () {
    return this.request.body;
  }

  preServiceOperationValidateMethod () {
    this.responseObject.error = validator.validate(
      this.validateMethod, this.getRequestJson());
  }

  /**
   * @details Check if any user is sign in.
   * Session for user exists to server site.
   */

  preServiceOperationAuthenticateUser () {
    if (logical.isObjectEmpty(this.session)) {
      this.responseObject.error = validator
        .validateCodes.UNAUTHORIZED_ACCESS;
    }
  }

  preServiceOperations () {
    if (this.hasToValidatedMethod()) {
      this.preServiceOperationValidateMethod();
      if (this.responseObject.error) return;
    }

    if (this.hasToAuthenticated()) {
      this.preServiceOperationAuthenticateUser();
      if (this.responseObject.error) return;
    }

    if (!this.validateUserEvents()) {
      this.responseObject.error = validator
        .validateCodes.UNAUTHORIZED_ACCESS;
    }
  }

  /**
   * @details Method prepare everything and call `endpointService`.
   * Validate request and catch errors and service that.
   */

  service () {
    this.preServiceOperations();
    if (this.responseObject.error) {
      this.sendResponse();
      return;
    }

    this.endpointService()
      .catch(error => this.makeCatch(error));
  }

  /**
   * @details Save parameters and call service method.
   * Session data are saved in `this.session` field.
   * @param request - client request object
   * @param response - client response object
   * @param validateMethod - methods from `lib/validator.methods`
   */

  constructor (request, response, validateMethod) {
    this.request = request;
    this.response = response;
    this.validateMethod = validateMethod;
    this.responseObject = {};
    this.session = {};

    if (this.isAuthenticated()) {
      this.session = request.user;
    }

    this.service();
  }

}

module.exports = Endpoint;
