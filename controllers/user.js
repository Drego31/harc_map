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
 * @return {boolean} - result of check from desription
 * @private
 */
function __checkForgotTimeout (forgotTimestamp) {
  // convert config value of timeout to ms
  const passwordForgotTimeout = systemConfig.app.passwordForgotTimeoutInMinutes * 60 * 1000;
  return (forgotTimestamp >= Date.now() - passwordForgotTimeout);
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
      // check if eventId is correct(exist)
      database.read('events', { eventId })
        .then(eventResult => {
          // event exist - user can be creat
          if (eventResult) {
            // check if user and userTeam doesn't already exist
            database.read('users', { $or: [{ user }, { userTeam }] })
              .then(userData => {
                // exist
                if (userData) {
                  utils.responseUserError(res, 400, errorsCodes.USER_EXIST);
                } else {
                  // user doesn't exist, we can create new
                  const newUserData = {
                    user,
                    userTeam,
                    password: utils.getSHA(password),
                    userEvents: [eventId],
                    accountType: 'common',
                    accountIsActive: false,
                    activationKey: utils.generateAccessKey(),
                    forgotKey: null,
                    forgotTimestamp: null,
                    accountCreated: Date.now(),
                    collectedPointsIds: [],
                  };
                  database.create('users', [newUserData])
                    .then((result) => {
                      if (result) {
                        mail.accountActivation(user, newUserData.activationKey)
                          .then(() => {
                            // User created
                            res.send({
                              user,
                              error: null,
                            });
                          })
                          .catch(error => {
                            utils.responseUserError(res, 200, errorsCodes.MAIL_UNKNOWN_ERROR, error);
                          });
                      } else {
                        utils.responseUserError(res, 200, errorsCodes.MAIL_UNKNOWN_ERROR);
                      }
                    })
                    .catch(error => {
                      utils.responseUserError(res, 200, errorsCodes.DATABASE_DATA_ERROR, error);
                    });
                }
              })
              .catch(error => {
                utils.responseUserError(res, 200, errorsCodes.DATABASE_DATA_ERROR, error);
              });
          } else {
            utils.responseUserError(res, 400, errorsCodes.EVENT_ID_NOT_EXIST);
          }
        })
        .catch(error => {
          utils.responseUserError(res, 200, errorsCodes.DATABASE_DATA_ERROR, error);
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
    const timestamp = Date.now();
    console.log('login init', 0);
    // Checking if user is already logged
    if (req.isAuthenticated()) {
      console.log('login isAuth', (Date.now() - timestamp) / 1000 + ' s');
      // Data from session
      const { user, userTeam, userEvents, accountType } = req.user;
      console.log('login isAuth before users', (Date.now() - timestamp) / 1000 + ' s');
      database.read('users', { user }).then(result => {
        console.log('login isAuth after users', (Date.now() - timestamp) / 1000 + ' s');
        if (result) {
          res.send({
            user,
            userTeam,
            collectedPointsIds: result.collectedPointsIds,
            eventId: userEvents[0],
            accountType,
            error: null,
          });
        } else {
          utils.responseUserError(res, 401, errorsCodes.SESSION_ERROR);
        }
      });

    } else if (Object.keys(req.body).length === 0) {
      console.log('login empty body', (Date.now() - timestamp) / 1000 + ' s');
      utils.responseUserError(res, 401, errorsCodes.USER_IS_NOT_LOGGED);
    } else {
      // User data validation
      console.log('login before validation', (Date.now() - timestamp) / 1000 + ' s');
      const requestBodyValidationError = validator.validate(
        validator.methods.validateUserLoginPostRequest, req.body,
      );
      console.log('login after validation', (Date.now() - timestamp) / 1000 + ' s');
      if (!requestBodyValidationError) {
        console.log('login before auth', (Date.now() - timestamp) / 1000 + ' s');

        passport.authenticate('local', (error, userData) => {
          console.log('login before auth', (Date.now() - timestamp) / 1000 + ' s');
          if (error || !userData) {
            // failed login
            utils.responseUserError(res, 401, errorsCodes.SESSION_ERROR, error);
          } else {
            console.log('login before login', (Date.now() - timestamp) / 1000 + ' s');

            req.login(userData, error => {
              console.log('login after login', (Date.now() - timestamp) / 1000 + ' s');
              // error with setting session
              if (error) {
                utils.responseUserError(res, 200, errorsCodes.SESSION_ERROR, error);
              } else {
                const { user, userTeam, userEvents, accountType } = userData;
                console.log('login login before users', (Date.now() - timestamp) / 1000 + ' s');
                database.read('users', { user }).then(result => {
                  console.log('login login after users', (Date.now() - timestamp) / 1000 + ' s');
                  if (result) {
                    res.send({
                      user,
                      userTeam,
                      collectedPointsIds: result.collectedPointsIds,
                      eventId: userEvents[0],
                      accountType,
                      error: null,
                    });
                  } else {
                    utils.responseUserError(res, 401, errorsCodes.SESSION_ERROR);
                  }
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
      error = validator.ValidateCodes.UNAUTHORIZED_ACCESS;
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
    // Data from client
    const { key } = req.params;
    database.read('users', { activationKey: key })
      .then(userData => {
        if (userData && !userData.accountIsActive) {
          const activationUpdateData = {
            accountIsActive: true,
            activationKey: null,
          };
          database.update('users', { _id: database.ObjectId(userData._id) }, activationUpdateData)
            .then(result => {
              // Successfully updated
              if (result) {
                res.redirect(302, '/sign-in');
              } else {
                utils.responseUserError(res, 200, errorsCodes.DATABASE_NO_RESULT_ERROR);
              }
            })
            .catch(error => {
              utils.responseUserError(res, 200, errorsCodes.DATABASE_DATA_ERROR, error);
            });
        } else {
          res.redirect(302, '/404');
        }
      })
      .catch(error => {
        utils.responseUserError(res, 200, errorsCodes.DATABASE_DATA_ERROR, error);
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
      // Data from client
      const { user } = req.body;
      database.read('users', { user })
        .then((userData) => {
          if (userData.accountIsActive) {
            const forgotData = {
              forgotKey: utils.generateAccessKey(),
              forgotTimestamp: Date.now(),
            };
            // Update user data with forgot key and forgot timestamp
            database.update('users', { user }, forgotData)
              .then((result) => {
                if (result) {
                  // Sending mail
                  mail.resetPassword(user, forgotData.forgotKey)
                    .then(() => {
                      // Email successfully sent
                      res.send({
                        user,
                        error: null,
                      });
                    })
                    .catch(error => {
                      utils.responseUserError(res, 200, errorsCodes.MAIL_UNKNOWN_ERROR, error);
                    });
                } else {
                  utils.responseUserError(res, 200, errorsCodes.MAIL_UNKNOWN_ERROR);
                }
              })
              .catch(error => {
                utils.responseUserError(res, 200, errorsCodes.DATABASE_DATA_ERROR, error);
              });
          } else {
            utils.responseUserError(res, 401, errorsCodes.ACCOUNT_IS_INACTIVE);
          }
        })
        .catch(error => {
          utils.responseUserError(res, 200, errorsCodes.DATABASE_DATA_ERROR, error);
        });
    } else {
      utils.responseUserError(res, 400, requestBodyValidationError);
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
    database.read('users', { forgotKey: key })
      .then((result) => {
        if (__checkForgotTimeout(result.forgotTimestamp)) {
          res.sendFile(path.resolve(__dirname, '../public/index.html'));
        } else {
          res.redirect(302, '/404');
        }
      })
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
        .then((userData) => {
          if (userData) {
            if (__checkForgotTimeout(userData.forgotTimestamp)) {
              const updateData = {
                password: utils.getSHA(password),
                forgotKey: null,
                forgotTimestamp: null,
              };
              database.update('users', { _id: database.ObjectId(userData._id) }, updateData)
                .then(() => {
                  res.send({
                    user: null,
                    error: null,
                  });
                })
                .catch(error => {
                  utils.responseUserError(res, 200, errorsCodes.DATABASE_DATA_ERROR, error);
                });
            } else {
              res.status(404).send();
            }
          } else {
            utils.responseUserError(res, 400, errorsCodes.INVALID_URL_KEY);
          }
        })
        .catch(error => {
          utils.responseUserError(res, 200, errorsCodes.DATABASE_DATA_ERROR, error);
        });
    } else {
      utils.responseUserError(res, 400, requestBodyValidationError);
    }
  });

module.exports = router;
