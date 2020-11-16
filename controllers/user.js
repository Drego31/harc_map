const express = require('express');
const router = express.Router();
const validator = require('../lib/validator');
const database = require('../lib/mongodb');
const utils = require('../lib/utils');
const passport = require('passport');
const mail = require('../lib/mail');
const systemConfig = require('../config/system.config');
const path = require('path');

// Codes for errorsCodes
const errorsCodes = require('../lib/validateCodes');

/**
 * @description User have some time for change password until link to change will be blocked.
 * Here we check this
 * @param forgotTimestamp {number} - timestamp of request for change password
 * @return {boolean/Error} - result of check from desription
 * @private
 */
function __checkForgotTimeout (forgotTimestamp) {
  // convert config value of timeout to ms
  const passwordForgotTimeout = systemConfig.app.passwordForgotTimeoutInMinutes * 60 * 1000;
  if (forgotTimestamp && forgotTimestamp >= Date.now() - passwordForgotTimeout) {
    return true;
  } else {
    throw errorsCodes.FORGOT_TIMESTAMP_HAS_ENDED;
  }
}

/**
 * @description Getting information about user that are sending to frontend.
 * This is not only session information!
 * @param userStructure {object} - Object of user from mongo collection or each user session store
 * @param collectedPointsIds {array} - array of collected ids
 * @return {{eventId: *, userTeam: *, accountType: *, error: null, user: *, collectedPointsIds: *}}
 * @private
 */
function __getUserDataForResponse (userStructure = {}, collectedPointsIds) {
  const { user, userTeam, userEvents, accountType } = userStructure;

  // user object schema that's sending to frontend
  return {
    user,
    userTeam,
    collectedPointsIds: collectedPointsIds,
    eventId: userEvents[0],
    accountType,
    error: null,
  };
}

/**
 * @description Create user object that will be insert to database
 * @param information {object} - information gave by user
 * @return {{password: string, accountCreated: number, userTeam: *, forgotTimestamp: null, accountType: string, accountIsActive: boolean, userEvents: [*], activationKey: string, user: *, forgotKey: null, collectedPointsIds: []}}
 * @private
 */
function __createNewUserObject (information) {
  const { user, userTeam, password, userEvent } = information;

  return {
    user,
    userTeam,
    password: utils.getSHA(password),
    userEvents: [userEvent],
    accountType: 'common',
    accountIsActive: false,
    activationKey: utils.generateAccessKey(),
    forgotKey: null,
    forgotTimestamp: null,
    accountCreated: Date.now(),
    collectedPointsIds: [],
  };
}

/**
 * @swagger
 *
 * /user:
 *  post:
 *    summary: User registration
 *    description: User registration (Request for mail with activation link)
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
 *              password:
 *                $ref: '#/components/properties/Password'
 *              userTeam:
 *                $ref: '#/components/properties/UserTeam'
 *              eventId:
 *                $ref: '#/components/properties/EventId'
 *          examples:
 *            Registration:
 *              value: { user: example@harcmap.pl, password: Abcd1234, userTeam: FonzieBoys, eventId: Ab12 }
 *      required: true
 *    responses:
 *      200:
 *        description: A username to be returned or error information about validation (MOVE ERRORS INFO TO 4** and 5** CODES)
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user:
 *                   $ref: '#/components/responses/200/User'
 *                error:
 *                   $ref: '#/components/responses/200/Error'
 *      400:
 *        description: Errors about invalid eventId, userTeam or another validation
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user:
 *                  $ref: '#/components/responses/400/Error'
 *                error:
 *                  $ref: '#/components/responses/400/Error'
 */
router.route('/')
  .post((req, res) => {
    // User data validation
    const requestBodyValidationError = validator.validate(
      validator.methods.validateUserRegistrationPostRequest, req.body,
    );

    if (!requestBodyValidationError) {
      // Data from client
      const { user, password, userTeam, eventId } = req.body;

      // user doesn't exist, we can create new
      const newUserData = __createNewUserObject({
        user,
        password,
        userTeam,
        userEvent: eventId,
      });

      // check if eventId is correct(exist)
      database.read('events', { eventId })
        // event exist - user can be creat
        .then(results => utils.throwIfEmpty(results, errorsCodes.EVENT_ID_NOT_EXIST))
        // check if user and userTeam doesn't already exist
        .then(() => database.read('users', { $or: [{ user }, { userTeam }] }))
        .then(results => utils.throwIf(results.length, errorsCodes.USER_EXIST))
        // create user
        .then(() => database.create('users', [newUserData]))
        .then(utils.throwIfEmpty)
        // send activation mail
        .then(() => mail.accountActivation(user, newUserData.activationKey))
        .then(() => {
          // User created
          res.send({
            user,
            error: null,
          });
        })
        .catch(errorCode => {
          if ([errorsCodes.USER_EXIST, errorsCodes.EVENT_ID_NOT_EXIST].includes(errorCode)) {
            utils.responseUserError(res, 400, errorCode);
          } else {
            utils.responseUserError(res, 200, errorCode);
          }
        });
    } else {
      utils.responseUserError(res, 400, requestBodyValidationError);
    }
  });

router.route('/login')
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
        .then(results => {
          const result = results[0];
          res.send(__getUserDataForResponse(req.user, result.collectedPointsIds));
        })
        .catch(() => {
          utils.responseUserError(res, 401, errorsCodes.SESSION_ERROR);
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
            utils.responseUserError(res, 401, errorsCodes.SESSION_ERROR, error);
          } else {
            req.login(userData, error => {
              // error with setting session
              if (error) {
                utils.responseUserError(res, 200, errorsCodes.SESSION_ERROR, error);
              } else {
                const { user } = userData;
                database.read('users', { user })
                  .then(utils.throwIfEmpty)
                  .then(results => {
                    const result = results[0];
                    res.send(__getUserDataForResponse(userData, result.collectedPointsIds));
                  })
                  .catch(() => {
                    utils.responseUserError(res, 401, errorsCodes.SESSION_ERROR);
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
      user = req.user.user;
      // Logout from session
      req.logout();
    } else {
      error = errorsCodes.UNAUTHORIZED_ACCESS;
    }

    res.send({
      user,
      error,
    });
  });

/**
 * @swagger
 *
 * /user/activation/{key}:
 *  get:
 *    summary: User activation account
 *    description: Using by user to activate account. Link received in email
 *    tags:
 *      - User
 *    parameters:
 *      - name: key
 *        description: Unique key assigned to inactive account
 *        in: query
 *        required: true
 *    responses:
 *      200:
 *        description: A username to be returned or error (MOVE ERRORS INFO TO 4** and 5** CODES)
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user:
 *                  $ref: '#/components/responses/200/User'
 *                error:
 *                  $ref: '#/components/responses/200/Error'
 *      302:
 *        description: Redirection to sign-in form(/sign-in) or error page(/404)
 */
router.route('/activation/:key')
  .get((req, res) => {
    const activationUpdateData = {
      accountIsActive: true,
      activationKey: null,
    };

    // Data from client
    const { key } = req.params;
    database.read('users', { activationKey: key })
      .then(utils.throwIfEmpty)
      .then(results => results[0])
      // check if account isn't active
      .then(result => utils.throwIf(result.accountIsActive, errorsCodes.DATABASE_NO_RESULT_ERROR))
      // update account to active
      .then(result => database.update('users', { _id: database.ObjectId(result._id) }, activationUpdateData))
      // successful updated
      .then(utils.throwIfEmpty)
      .then(() => {
        res.redirect(302, '/sign-in');
      })
      .catch(errorCode => {
        if (errorCode === errorsCodes.DATABASE_NO_RESULT_ERROR) {
          res.redirect(302, '/404');
        } else {
          utils.responseUserError(res, 200, errorCode);
        }
      });
  });

/**
 * @swagger
 *
 * /user/remind:
 *  post:
 *    summary: User remind password
 *    description: Request for reset user password
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
 *          examples:
 *            Registration:
 *              value: { user: example@harcmap.pl }
 *      required: true
 *    responses:
 *      200:
 *        description: A username to be returned or error (MOVE ERRORS INFO TO 4** and 5** CODES)
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user:
 *                  $ref: '#/components/responses/200/User'
 *                error:
 *                  $ref: '#/components/responses/200/Error'
 *      400:
 *        description: Errors about validation
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user:
 *                  $ref: '#/components/responses/400/User'
 *                error:
 *                  $ref: '#/components/responses/400/Error'
 *      401:
 *        description: Inactive account
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user:
 *                  $ref: '#/components/responses/400/User'
 *                error:
 *                  $ref: '#/components/responses/400/Error'
 */
router.route('/remind')
  .post((req, res) => {
    // User data validation
    const requestBodyValidationError = validator.validate(
      validator.methods.validateUserRemindPostRequest, req.body,
    );

    if (!requestBodyValidationError) {
      const forgotData = {
        forgotKey: utils.generateAccessKey(),
        forgotTimestamp: Date.now(),
      };

      // Data from client
      const { user } = req.body;
      database.read('users', { user })
        .then(results => {
          const result = results[0];

          if (result && result.accountIsActive) {
            return result;
          } else {
            utils.responseUserError(res, 401, errorsCodes.ACCOUNT_IS_INACTIVE);
          }
        })
        // update user object with forgot key and timeout
        .then(() => database.update('users', { user }, forgotData))
        // unknow error of mail module
        .then(result => utils.throwIfEmpty(result, errorsCodes.MAIL_UNKNOWN_ERROR))
        // send mail
        .then(() => mail.resetPassword(user, forgotData.forgotKey))
        .then(() => {
          // successful sent
          res.send({
            user,
            error: null,
          });
        })
        .catch(errorCode => {
          utils.responseUserError(res, 200, errorCode);
        });
    } else {
      utils.responseUserError(res, 400, errorsCodes.JSON_INCORRECT, requestBodyValidationError);
    }
  });

/**
 * @swagger
 *
 * /user/remind/{key}:
 *  get:
 *    summary: Request for change password
 *    description: Using by user to go to change password form. Link received via email
 *    tags:
 *      - User
 *    parameters:
 *      - name: key
 *        description: Unique key assigned to inactive account
 *        in: query
 *        required: true
 *    responses:
 *      200:
 *        description: Return index.html
 *        content:
 *          text/html:
 *            schema:
 *              type: string
 *      302:
 *        description: Redirection to error page(/404)
 */
router.route('/remind/:key')
  .get((req, res) => {
    // Data from client
    const { key } = req.params;
    // search for key
    database.read('users', { forgotKey: key })
      .then(utils.throwIfEmpty)
      // check if forgotTimeout hasn't ended
      .then(userWithKey => __checkForgotTimeout(userWithKey.forgotTimestamp))
      .then(() => res.sendFile(path.resolve(__dirname, '../public/index.html')))
      .catch(() => {
        res.redirect(302, '/404');
      });
  })
  /**
   * @swagger
   *
   * /user/remind/{key}:
   *  put:
   *    summary: Change password in database
   *    description: Using by user to change password in database
   *    tags:
   *      - User
   *    parameters:
   *      - name: key
   *        description: Unique key assigned to inactive account
   *        in: query
   *        required: true
   *    requestBody:
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              password:
   *                $ref: '#/components/properties/Password'
   *          examples:
   *            Registration:
   *              value: { password: ExamplePassword1! }
   *      required: true
   *    responses:
   *      200:
   *        description: Return when successfully change password. TO CHANGE - received too when DB crush
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                user:
   *                  $ref: '#/components/responses/200/User'
   *                error:
   *                  $ref: '#/components/responses/200/Error'
   *      400:
   *        description: Errors
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                user:
   *                  $ref: '#/components/responses/400/User'
   *                error:
   *                  $ref: '#/components/responses/400/Error'
   *      404:
   *        description: Return when time to change password pass
   */
  .put((req, res) => {
    // User data validation
    const requestBodyValidationError = validator.validate(
      validator.methods.validateUserRemindPutRequest, req.body,
    );
    if (!requestBodyValidationError) {
      // Data from client
      const { password } = req.body;
      const { key } = req.params;

      database.read('users', { forgotKey: key })
        .then(results => utils.throwIfEmpty(results, errorsCodes.INVALID_URL_KEY))
        // forgotTimeout has ended
        .then(results => {
          const result = results[0];

          if (__checkForgotTimeout(result.forgotTimestamp)) {
            return result;
          } else {
            res.status(404).send();
          }
        })
        // change password to new
        .then(userData => {
          const updateData = {
            password: utils.getSHA(password),
            forgotKey: null,
            forgotTimestamp: null,
          };
          return database.update('users', { _id: database.ObjectId(userData._id) }, updateData);
        })
        .then(() => {
          res.send({
            user: null,
            error: null,
          });
        })
        .catch(errorCode => {
          utils.responseUserError(res, 200, errorCode);
        });
    } else {
      utils.responseUserError(res, 400, errorsCodes.JSON_INCORRECT);
    }
  });

module.exports = router;
