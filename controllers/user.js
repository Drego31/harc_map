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
const errorsCodes = validator.ValidateCodes;

// TODO add validation

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
 * @description User login, logout
 */
router.route('/login')
  /**
   * @description Login
   */
  .post((req, res, next) => {
    // Checking if user is already logged
    if (req.isAuthenticated()) {
      // Data from session
      const { user, userTeam, collectedPointsIds, userEvents } = req.user;
      res.send({
        user,
        userTeam,
        collectedPointsIds,
        eventId: userEvents[0],
        error: null,
      });
    } else if (Object.keys(req.body).length === 0) {
      utils.responseError(res, 401, errorsCodes.USER_IS_NOT_LOGGED);
    } else {
      // User data validation
      const requestBodyValidationError = validator.validate(
        validator.methods.validateUserLoginPostRequest, req.body,
      );
      if (!requestBodyValidationError) {
        passport.authenticate('local', (error, userData) => {
          if (error || !userData) {
            // failed login
            utils.responseError(res, 401, error);
          } else {
            req.login(userData, error => {
              // error with setting session
              if (error) {
                utils.responseError(res, 500, errorsCodes.SESSION_ERROR, error);
              } else {
                const { user, userTeam, collectedPointsIds, userEvents } = userData;
                res.send({
                  user,
                  userTeam,
                  collectedPointsIds,
                  eventId: userEvents[0],
                  error: null,
                });
              }
            });
          }
        })(req, res, next);
      } else {
        utils.responseError(res, 400, requestBodyValidationError);
      }
    }
  })
  /**
   * @description Logout
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
 * @description Registration
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
                  utils.responseError(res, 400, errorsCodes.USER_EXIST);
                } else {
                  // user doesn't exist, we can create new
                  const newUserData = {
                    user,
                    userTeam,
                    password: utils.getSHA(password),
                    userEvents: [eventId],
                    accountType: 'common',
                    accountIsActive: false,
                    activationKey: utils.getRandomString(),
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
                            utils.responseError(res, 500, errorsCodes.MAIL_UNKNOWN_ERROR, error);
                          });
                      } else {
                        utils.responseError(res, 500, errorsCodes.MAIL_UNKNOWN_ERROR);
                      }
                    })
                    .catch(error => {
                      utils.responseError(res, 500, errorsCodes.DATABASE_DATA_ERROR, error);
                    });
                }
              })
              .catch(error => {
                utils.responseError(res, 500, errorsCodes.DATABASE_DATA_ERROR, error);
              });
          } else {
            utils.responseError(res, 400, errorsCodes.EVENT_ID_NOT_EXIST);
          }
        })
        .catch(error => {
          utils.responseError(res, 500, errorsCodes.DATABASE_DATA_ERROR, error);
        });
    } else {
      utils.responseError(res, 400, requestBodyValidationError);
    }
  });

/**
 * @description User activation account
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
          database.update('users', { _id: database.ObjectId(result._id) }, activationUpdateData)
            .then(result => {
              // Successfully updated
              if (result) {
                res.redirect(302, '/');
              } else {
                utils.responseError(res, 500, errorsCodes.DATABASE_NO_RESULT_ERROR);
              }
            })
            .catch(error => {
              utils.responseError(res, 500, errorsCodes.DATABASE_DATA_ERROR, error);
            });
        } else {
          utils.responseError(res, 400, errorsCodes.INVALID_URL_KEY);
        }
      })
      .catch(error => {
        utils.responseError(res, 500, errorsCodes.DATABASE_DATA_ERROR, error);
      });
  });

/**
 * @description Forgot password
 */
router.route('/remind')
  /**
   * @description Send email with remind link
   */
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
              forgotKey: utils.getRandomString(),
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
                      utils.responseError(res, 500, errorsCodes.MAIL_UNKNOWN_ERROR, error);
                    });
                } else {
                  utils.responseError(res, 500, errorsCodes.MAIL_UNKNOWN_ERROR);
                }
              })
              .catch(error => {
                utils.responseError(res, 500, errorsCodes.DATABASE_DATA_ERROR, error);
              });
          } else {
            utils.responseError(res, 401, errorsCodes.ACCOUNT_IS_INACTIVE);
          }
        })
        .catch(error => {
          utils.responseError(res, 500, errorsCodes.DATABASE_DATA_ERROR, error);
        });
    } else {
      utils.responseError(res, 400, requestBodyValidationError);
    }
  });

/**
 * @description Forgot password
 */
router.route('/remind/:key')
  /**
   * @description TODO Return HTML if user was ask for change password (not longer then - systemConfig.app.passwordForgotTimeoutInMinutes)
   */
  .get((req, res) => {
    // Data from client
    const { key } = req.params;
    database.read('users', { forgotKey: key })
      .then((result) => {
        if (__checkForgotTimeout(result.forgotTimestamp)) {
          res.sendFile(path.resolve(__dirname, '../public/index.html'));
        } else {
          res.status(404).send();
        }
      })
      .catch(() => {
        res.status(404).send();
      });
  })
  /**
   * @description Change password in Database
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
                  utils.responseError(res, 500, errorsCodes.DATABASE_DATA_ERROR, error);
                });
            } else {
              res.status(404).send();
            }
          } else {
            utils.responseError(res, 400, errorsCodes.INVALID_URL_KEY);
          }
        })
        .catch(error => {
          utils.responseError(res, 500, errorsCodes.DATABASE_DATA_ERROR, error);
        });
    } else {
      utils.responseError(res, 400, requestBodyValidationError);
    }
  });

module.exports = router;
