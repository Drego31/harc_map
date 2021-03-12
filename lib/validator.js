/**
 * @module Validator module for client requests.
 * @details Every request data should be validate by the module.
 * Validate methods throw exception for every validate error.
 */

const tools = require('../vendors/validate-tools');
const validateCodes = require('./validateCodes');

/**
 * @class Validator
 * @details All validate methods for client requests.
 */

class Validator {

  validatePoint (point) {
    if (tools.isNullOrEmpty(point.pointId)) {
      throw validateCodes.POINT_ID_IS_EMPTY;
    }
    if (tools.isEasyToRead(point.pointId) === false) {
      throw validateCodes.POINT_ID_IS_UNREADABLE;
    }
    if (tools.notContain(point.pointType, ['permanent', 'timeout'])) {
      throw validateCodes.POINT_TYPE_IS_INCORRECT;
    }
    // if (tools.isNullOrEmpty(point.pointName)) {
    //   throw validateCodes.POINT_NAME_IS_EMPTY;
    // }
    if (tools.isUndefined(point.pointExpirationTime)) {
      throw validateCodes.POINT_EXPIRATION_TIME_IS_UNDEFINED;
    }
    if (tools.isUndefined(point.pointAppearanceTime)) {
      throw validateCodes.POINT_APPEARANCE_TIME_IS_UNDEFINED;
    }
    if (tools.isUndefined(point.pointCollectionTime)) {
      throw validateCodes.POINT_COLLECTION_TIME_IS_UNDEFINED;
    }
    if (tools.inNotRange(point.pointLongitude, -180, 180)) {
      throw validateCodes.POINT_LONGITUDE_WITHOUT_RANGE;
    }
    if (tools.inNotRange(point.pointLatitude, -180, 180)) {
      throw validateCodes.MAP_POSITION_LATITUDE_WITHOUT_RANGE;
    }
    if (tools.isNullOrEmpty(point.pointCategory)) {
      throw validateCodes.POINT_CATEGORY_ID_IS_EMPTY;
    }
  }

  validateEvent (json) {
    if (tools.isNullOrEmpty(json.eventId)) {
      throw validateCodes.EVENT_ID_IS_EMPTY;
    }
    if (tools.isNullOrEmpty(json.eventName)) {
      throw validateCodes.EVENT_NAME_IS_EMPTY;
    }
    if (tools.isNullOrEmpty(json.eventStartDate)) {
      throw validateCodes.EVENT_START_DATE_IS_EMPTY;
    }
    if (tools.isNullOrEmpty(json.eventEndDate)) {
      throw validateCodes.EVENT_END_DATE_IS_EMPTY;
    }
    if (tools.inNotRange(json.mapLongitude, -180, 180)) {
      throw validateCodes.MAP_POSITION_LONGITUDE_WITHOUT_RANGE;
    }
    if (tools.inNotRange(json.mapLatitude, -180, 180)) {
      throw validateCodes.MAP_POSITION_LATITUDE_WITHOUT_RANGE;
    }
    if (tools.inNotRange(json.mapZoom, 2, 19)) {
      throw validateCodes.MAP_ZOOM_WITHOUT_RANGE;
    }
  }

  validateCategory (json) {
    if (tools.isNullOrEmpty(json.categoryId)) {
      throw validateCodes.POINT_CATEGORY_ID_IS_EMPTY;
    }
    if (tools.inNotRange(json.pointValue, 1, 50)) {
      throw validateCodes.POINT_CATEGORY_VALUE_WITHOUT_RANGE;
    }
    if (tools.inNotRange(json.pointShape, 1, 50)) {
      throw validateCodes.POINT_CATEGORY_SHAPE_WITHOUT_RANGE;
    }
    if (tools.notContain(json.pointType, ['permanent', 'timeout'])) {
      throw validateCodes.POINT_CATEGORY_TYPE_IS_INCORRECT;
    }
  }

  validateUserRegistrationPostRequest (json) {
    if (tools.isNotEmail(json.user)) {
      throw validateCodes.IS_NOT_EMAIL;
    }
    if (tools.isShorter(json.password, 8)) {
      throw validateCodes.PASSWORD_TOO_SHORT;
    }
    if (tools.hasNotNumber(json.password)) {
      throw validateCodes.PASSWORD_HAS_NOT_NUMBER;
    }
    if (tools.isNullOrEmpty(json.userTeam)) {
      throw validateCodes.TEAM_NAME_IS_EMPTY;
    }
    if (tools.isNullOrEmpty(json.eventId)) {
      throw validateCodes.EVENT_ID_IS_EMPTY;
    }
  }

  validateUserRemindPostRequest (json) {
    if (tools.isNotEmail(json.user)) {
      throw validateCodes.IS_NOT_EMAIL;
    }
  }

  validateUserRemindPutRequest (json) {
    if (tools.isShorter(json.password, 8)) {
      throw validateCodes.PASSWORD_TOO_SHORT;
    }
    if (tools.hasNotNumber(json.password)) {
      throw validateCodes.PASSWORD_HAS_NOT_NUMBER;
    }
  }

  validateUserLoginPostRequest (json) {
    if (tools.isNotEmail(json.user)) {
      throw validateCodes.IS_NOT_EMAIL;
    }
    if (tools.isShorter(json.password, 8)) {
      throw validateCodes.PASSWORD_TOO_SHORT;
    }
    if (tools.hasNotNumber(json.password)) {
      throw validateCodes.PASSWORD_HAS_NOT_NUMBER;
    }
  }

  validateEventGetRequest (json) {
    if (tools.isNullOrEmpty(json.eventId)) {
      throw validateCodes.EVENT_ID_IS_EMPTY;
    }
  }

  validateEventPostRequest (json) {
    this.validateEvent(json);
  }

  validateEventPutRequest (json) {
    this.validateEvent(json);
  }

  validatePointGetRequest (json) {
    if (tools.isNullOrEmpty(json.eventId)) {
      throw validateCodes.EVENT_ID_IS_EMPTY;
    }
    if (tools.isNullOrEmpty(json.pointId)) {
      throw validateCodes.POINT_ID_IS_EMPTY;
    }
  }

  validatePointPostRequest (json) {
    if (tools.isNullOrEmpty(json.eventId)) {
      throw validateCodes.EVENT_ID_IS_EMPTY;
    }
    this.validatePoint(json.point);
  }

  validatePointPutRequest (json) {
    if (tools.isNullOrEmpty(json.eventId)) {
      throw validateCodes.EVENT_ID_IS_EMPTY;
    }
    this.validatePoint(json.point);
  }

  validatePointDeleteRequest (json) {
    if (tools.isNullOrEmpty(json.eventId)) {
      throw validateCodes.EVENT_ID_IS_EMPTY;
    }
    if (tools.isNullOrEmpty(json.pointId)) {
      throw validateCodes.POINT_ID_IS_EMPTY;
    }
  }

  validatePointsGetRequest (json) {
    if (tools.isNullOrEmpty(json.eventId)) {
      throw validateCodes.EVENT_ID_IS_EMPTY;
    }
  }

  validatePointsPostRequest (json) {
    if (tools.isNullOrEmpty(json.eventId)) {
      throw validateCodes.EVENT_ID_IS_EMPTY;
    }
    json.points.forEach(point => this.validatePoint(point));
  }

  validateEventCollectPutRequest (json) {
    if (tools.isNotEmail(json.user)) {
      throw validateCodes.IS_NOT_EMAIL;
    }
    if (tools.isNullOrEmpty(json.eventId)) {
      throw validateCodes.EVENT_ID_IS_EMPTY;
    }
    if (tools.isNullOrEmpty(json.pointId)) {
      throw validateCodes.POINT_ID_IS_EMPTY;
    }
  }

  validatePointCategoriesGetRequest (json) {
    if (tools.isNullOrEmpty(json.eventId)) {
      throw validateCodes.EVENT_ID_IS_EMPTY;
    }
  }

  validatePointCategoriesPostRequest (json) {
    if (tools.isNullOrEmpty(json.eventId)) {
      throw validateCodes.EVENT_ID_IS_EMPTY;
    }
    json.categories.forEach(category => this.validateCategory(category));
  }

  validatePointCategoriesDeleteRequest (json) {
    if (tools.isNullOrEmpty(json.eventId)) {
      throw validateCodes.EVENT_ID_IS_EMPTY;
    }
  }

}

// export
module.exports =
  {
    // validate error codes
    validateCodes: validateCodes,
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
        const validator = new Validator();
        const boundedValidator = validatorType.bind(validator);
        boundedValidator(json);
      } catch (exception) {
        if (exception instanceof Error) {
          console.error(exception);
          return validateCodes.JSON_INCORRECT;
        } else {
          return exception;
        }
      }
      return null;
    },
  };
