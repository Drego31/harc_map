const express = require('express');
const router = express.Router();
const validator = require('../../lib/validator');
const database = require('../../lib/mongodb');
const utils = require('../../lib/utils');
const passport = require('passport');

// Codes for errorsCodes
const errorsCodes = require('../../lib/validateCodes');

/**
 * @description Getting information about user that are sending to frontend.
 * This is not only session information!
 * @param userStructure {object} - Object of user from mongo collection or each user session store
 * @param collectedPointsIds {array} - array of collected ids
 * @param warnCode {number|null} - warn codes
 * @return {{eventId: *, userTeam: *, accountType: *, error: null, user: *, collectedPointsIds: *}}
 * @private
 */
function __getUserDataForResponse (userStructure = {}, collectedPointsIds, warnCode = null) {
  const {
    user,
    userTeam,
    userEvents,
    accountType,
    limitedPermissions,
  } = userStructure;

  // user object schema that's sending to frontend
  return {
    user,
    userTeam,
    collectedPointsIds: collectedPointsIds,
    eventId: userEvents[0],
    accountType,
    limitedPermissions,
    error: null,
    warn: warnCode,
  };
}

router.route('/')
  /**
   * @swagger
   *
   * /user/login:
   *  post:
   *    summary: User login or user session check
   *    description: Can be use in two cases. First, for sign in user. Second, for check if user is already logged
   *    tags:
   *      - User
   *    requestBody:
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              user:
   *                $ref: '#/components/properties/User'
   *                required: false
   *              password:
   *                $ref: '#/components/properties/Password'
   *                required: false
   *          examples:
   *            ex1:
   *              value: {}
   *              summary: To check if user are logged
   *              description: Can adopt empty body for response data if user are logged
   *            ex2:
   *              value: { user: example@harcmap.pl, password: Abcd1234 }
   *              summary: To sign in user
   *              description: To sign in user, both fields are required
   *      required: true
   *    responses:
   *      200:
   *        description: A user data to be returned or error information (MOVE ERRORS INFO TO 4** and 5** CODES)
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                user:
   *                  $ref: '#/components/responses/200/User'
   *                userTeam:
   *                  $ref: '#/components/responses/200/UserTeam'
   *                collectedPointsIds:
   *                  $ref: '#/components/responses/200/CollectedPointsIds'
   *                eventId:
   *                  $ref: '#/components/responses/200/EventId'
   *                error:
   *                  $ref: '#/components/responses/200/Error'
   *                warn:
   *                  $ref: '#/components/responses/200/Warn'
   *      401:
   *        description: User is not logged, have no access
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                user:
   *                  $ref: '#/components/responses/400/User'
   *                error:
   *                  $ref: '#/components/responses/200/Error'
   */
  .post((req, res, next) => {
    // Checking if user is already logged
    if (req.isAuthenticated()) {
      // Data from session
      const { user } = req.user;
      database.read('users', { user })
        .then(utils.throwIfEmpty)
        .then(result => {
          res.send(__getUserDataForResponse(req.user, result.collectedPointsIds));
        })
        .catch(errorMsg => {
          utils.responseUserError(res, 401, errorsCodes.SESSION_ERROR, errorMsg);
        });
    } else if (Object.keys(req.body).length === 0) {
      utils.responseUserError(res, 401, errorsCodes.USER_IS_NOT_LOGGED);

    } else {
      // User data validation
      const requestBodyValidationError = validator.validate(
        validator.methods.validateUserLoginPostRequest, req.body,
      );
      if (!requestBodyValidationError) {
        passport.authenticate('local', (error, userData) => {
          if (error || !userData) {
            // failed login
            utils.responseUserError(res, 401, error, error);
          } else {
            req.login(userData, (error) => {
              // error with setting session
              if (error) {
                utils.responseUserError(res, 200, errorsCodes.SESSION_ERROR, error);
              } else {
                const { user } = userData;
                database.read('users', { user })
                  // successful updated
                  .then(utils.throwIfEmpty)
                  .then(result => {
                    const {
                      collectedPointsIds,
                      loginHistory,
                    } = result;
                    let warnCode;

                    if (loginHistory) {
                      ({ warnCode } = loginHistory);
                    }

                    res.send(__getUserDataForResponse(userData, collectedPointsIds, warnCode));
                  })
                  .catch(errorMsg => {
                    utils.responseUserError(res, 401, errorsCodes.SESSION_ERROR, errorMsg);
                  });
              }
            });
          }
        })(req, res, next);
      } else {
        utils.responseUserError(res, 400, requestBodyValidationError);
      }
    }
  })
  /**
   * @swagger
   *
   * /user/login:
   *  delete:
   *    summary: User logout
   *    description: Use to destroy user session
   *    tags:
   *      - User
   *    responses:
   *      200:
   *        description: a user data to be returned or error information (MOVE ERRORS INFO TO 4** and 5** CODES)
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                user:
   *                  $ref: '#/components/responses/200/User'
   *                error:
   *                  $ref: '#/components/responses/200/Error'
   */
  .delete((req, res) => {
    let user = null;
    let error = null;

    if (req.isAuthenticated()) {
      // Data from client
      ({ user } = req.user);
      // Logout from session
      req.logout();
    } else {
      error = errorsCodes.UNAUTHORIZED_ACCESS;
    }

    res.send({
      user,
      error,
      warn: null,
    });
  });

module.exports = router;
