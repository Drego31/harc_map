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
    } else {
      passport.authenticate('local', (error, userData) => {
        if (error || !userData) {
          // failed login
          utils.responseError(res, 401, errorsCodes.UNAUTHORIZED_ACCESS, error);
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
    }
  })
  /**
   * @description Logout
   */
  .delete((req, res) => {
    // Data from client
    const { user } = req.user;
    // Logout from session
    req.logout();
    res.send({
      user: user,
      error: null,
    });
  });

/**
 * @description Registration
 */
router.route('/registration')
  .post((req, res) => {
    // Data from client
    const { user, password, userTeam, eventId } = req.body;
    // check if eventId is correct(exist)
    database.read('events', { eventId })
      .then(result => {
        // event exist - user can be creat
        if (result) {
          // check if user and userTeam doesn't already exist
          database.read('users', { $or: [{ user }, { userTeam }] })
            .then(result => {
              // exist
              if (result) {
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
                  .then(() => {
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
  });

/**
 * @description User activation account
 */
router.route('/activation/:key')
  .get((req, res) => {
    // Data from client
    const { key } = req.params;
    database.read('users', { activationKey: key })
      .then(result => {
        if (result && !result.accountIsActive) {
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
          utils.responseError(res, 401, errorsCodes.ACCOUNT_IS_INACTIVE);
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
    // Data from client
    const { email } = req.body;
    database.read('users', { user: email })
      .then(() => {
        const forgotData = {
          forgotKey: utils.getRandomString(),
          forgotTimestamp: Date.now(),
        };
        // Update user data with forgot key and forgot timestamp
        database.update('users', { user: email }, forgotData)
          .then(() => {
            // Sending mail
            mail.resetPassword(email, forgotData.forgotKey)
              .then(() => {
                // Email successfully sent
                res.send({
                  user: email,
                  error: null,
                });
              })
              .catch(error => {
                utils.responseError(res, 500, errorsCodes.MAIL_UNKNOWN_ERROR, error);
              });
          })
          .catch(error => {
            utils.responseError(res, 500, errorsCodes.DATABASE_DATA_ERROR, error);
          });
      })
      .catch(error => {
        utils.responseError(res, 500, errorsCodes.DATABASE_DATA_ERROR, error);
      });
  });

/**
 * @description Forgot password
 */
router.route('/remind/:key')
  /**
   * @description TODO Return HTML if user was ask for change password (not longer then 24h - systemConfig.app.passwordForgotTimeoutInMinutes)
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
    // Data from client
    const { password } = req.body;
    const { key } = req.params;
    database.read('users', { forgotKey: key })
      .then((userData) => {
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
      })
      .catch(error => {
        utils.responseError(res, 500, errorsCodes.DATABASE_DATA_ERROR, error);
      });
  });

module.exports = router;
