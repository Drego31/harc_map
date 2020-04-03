/**
 * @module Validator module for client requests.
 * @details Every request data should be validate by the module.
 * Validate methods throw exception for every validate error.
 */

const tools = require('../vendors/validate-tools');

/**
 * @brief ValidateCodes
 * @details Validate error codes to throw in validate methods.
 */

const ValidateCodes = Object.freeze({
  // 1-1## - validation, incoming data errors,
  IS_NOT_EMAIL: 1,
  PASSWORD_TOO_SHORT: 2,
  PASSWORD_HAS_NOT_NUMBER: 3,
  TEAM_NAME_IS_EMPTY: 4,
  EVENT_ID_IS_EMPTY: 5,
  EVENT_NAME_IS_EMPTY: 6,
  MAP_POSITION_LONGITUDE_WITHOUT_RANGE: 7,
  MAP_POSITION_LATITUDE_WITHOUT_RANGE: 8,
  MAP_ZOOM_WITHOUT_RANGE: 9,
  POINT_ID_IS_EMPTY: 10,
  POINT_NAME_IS_EMPTY: 11,
  POINT_LONGITUDE_WITHOUT_RANGE: 12,
  POINT_LATITUDE_WITHOUT_RANGE: 13,
  POINT_TYPE_IS_INCORRECT: 14,
  POINT_VALUE_IS_EMPTY: 15,
  JSON_INCORRECT: 100,
  EVENT_ID_NOT_EXIST: 101,
  // 2## - database errors,
  DATABASE_DATA_ERROR: 200,
  DATABASE_NO_RESULT_ERROR: 201,
  // 3## - session, access, security errors,
  SESSION_ERROR: 300,
  UNAUTHORIZED_ACCESS: 301,
  USER_EXIST: 302,
  ACCOUNT_IS_INACTIVE: 303,
  LOGIN_FAILED: 304,
  LOGIN_INVALID_PASSWORD: 305,
  LOGIN_INVALID_USER: 306,
  // 4## - mail errors,
  MAIL_UNKNOWN_ERROR: 400,
});

/**
 * @class Validator
 * @details All validate methods for client requests.
 */

class Validator {
  validatePoint (point) {
    if (tools.isNullOrEmpty(point.pointId)) {
      throw ValidateCodes.POINT_ID_IS_EMPTY;
    }
    if (tools.isNullOrEmpty(point.name)) {
      throw ValidateCodes.POINT_NAME_IS_EMPTY;
    }
    if (tools.inNotRange(point.longitude, -180, 180)) {
      throw ValidateCodes.POINT_LONGITUDE_WITHOUT_RANGE;
    }
    if (tools.inNotRange(point.latitude, -180, 180)) {
      throw ValidateCodes.MAP_POSITION_LATITUDE_WITHOUT_RANGE;
    }
    if (tools.notContain(point.type, ['permanent', 'timeout'])) {
      throw ValidateCodes.POINT_TYPE_IS_INCORRECT;
    }
    if (tools.isNullOrEmpty(point.value)) {
      throw ValidateCodes.POINT_VALUE_IS_EMPTY;
    }
  }

  validateEvent (json) {
    if (tools.isNullOrEmpty(json.eventId)) {
      throw ValidateCodes.EVENT_ID_IS_EMPTY;
    }
    if (tools.isNullOrEmpty(json.name)) {
      throw ValidateCodes.EVENT_NAME_IS_EMPTY;
    }
    if (tools.inNotRange(json.mapPosition.longitude, -180, 180)) {
      throw ValidateCodes.MAP_POSITION_LONGITUDE_WITHOUT_RANGE;
    }
    if (tools.inNotRange(json.mapPosition.latitude, -180, 180)) {
      throw ValidateCodes.MAP_POSITION_LATITUDE_WITHOUT_RANGE;
    }
    if (tools.inNotRange(json.mapZoom, 2, 19)) {
      throw ValidateCodes.MAP_ZOOM_WITHOUT_RANGE;
    }

    for (const point of json.points) {
      this.validatePoint(point);
    }
  }

  validateUserRegistrationPostRequest (json) {
    if (tools.isNotEmail(json.user)) {
      throw ValidateCodes.IS_NOT_EMAIL;
    }
    if (tools.isShorter(json.password, 8)) {
      throw ValidateCodes.PASSWORD_TOO_SHORT;
    }
    if (tools.hasNotNumber(json.password)) {
      throw ValidateCodes.PASSWORD_HAS_NOT_NUMBER;
    }
    if (tools.isNullOrEmpty(json.teamName)) {
      throw ValidateCodes.TEAM_NAME_IS_EMPTY;
    }
    if (tools.isNullOrEmpty(json.eventId)) {
      throw ValidateCodes.EVENT_ID_IS_EMPTY;
    }
  }

  validateUserRemindPostRequest (json) {
    if (tools.isNotEmail(json.user)) {
      throw ValidateCodes.IS_NOT_EMAIL;
    }
  }

  validateUserRemindPutRequest (json) {
    if (tools.isShorter(json.password, 8)) {
      throw ValidateCodes.PASSWORD_TOO_SHORT;
    }
    if (tools.hasNotNumber(json.password)) {
      throw ValidateCodes.PASSWORD_HAS_NOT_NUMBER;
    }
  }

  validateUserLoginPostRequest (json) {
    if (tools.isNotEmail(json.user)) {
      throw ValidateCodes.IS_NOT_EMAIL;
    }
    if (tools.isShorter(json.password, 8)) {
      throw ValidateCodes.PASSWORD_TOO_SHORT;
    }
    if (tools.hasNotNumber(json.password)) {
      throw ValidateCodes.PASSWORD_HAS_NOT_NUMBER;
    }
  }

  validateEventGetRequest (json) {
    if (tools.isNullOrEmpty(json.eventId)) {
      throw ValidateCodes.EVENT_ID_IS_EMPTY;
    }
  }

  validateEventPostRequest (json) {
    this.validateEvent(json);
  }

  validateEventPutRequest (json) {
    this.validateEvent(json);
  }

  validateEventCollectPutRequest (json) {
    if (tools.isNotEmail(json.user)) {
      throw ValidateCodes.IS_NOT_EMAIL;
    }
    if (tools.isNullOrEmpty(json.eventId)) {
      throw ValidateCodes.EVENT_ID_IS_EMPTY;
    }
    if (tools.isNullOrEmpty(json.pointId)) {
      throw ValidateCodes.POINT_ID_IS_EMPTY;
    }
  }
}

// export
module.exports =
  {
    // validate error codes
    ValidateCodes: ValidateCodes,
    methods: new Validator(),

    /**
     * Validate json data by validator type.
     * The method validate requests from client
     * with service for exceptions.
     * @param validatorType - validate function
     * @param json - data to validate
     * @returns {null|number|*}
     */

    validate: function (validatorType, json) {
      try {
        validatorType(json);
      } catch (exception) {
        if (exception instanceof Error) {
          return ValidateCodes.JSON_INCORRECT;
        } else {
          return exception;
        }
      }
      return null;
    },
  };
