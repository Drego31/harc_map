const express = require('express');
const router = express.Router();
const validator = require('../lib/validator');
const database = require('../lib/mongodb');
const utils = require('../lib/utils');
const passport = require('passport');
const mail = require('../lib/mail');
const systemConfig = require('../config/system.config');

// TODO Validation
// TODO error codes
// TODO functions for same responses

/**
 * User login
 */
router.post('/login', (req, res, next) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    const { _id } = req.user;
    database.read('users', { _id: database.ObjectId(_id) })
      .then((userData) => {
        const { user, userEvents, teamName, collectedPointsIds } = userData;
        res.send({
          user,
          teamName,
          collectedPointsIds,
          eventId: userEvents[0],
          error: null,
        });
      })
      .catch(error => {
        res.status(500).send({
          user: null,
          error,
        });
      });
  } else {
    passport.authenticate('local', (error, userData) => {
      if (error || !userData) {
        // failed login
        // TODO error name
        res.status(401).send({
          user: null,
          error,
        });
      } else {
        req.login(userData, error => {
          // error with setting session
          if (error) {
            // TODO error name
            res.status(500).send({
              user: null,
              error: 'unhandled session error',
            });
          } else {
            const { user, teamName, collectedPointsIds, userEvents } = userData;
            res.send({
              user,
              teamName,
              collectedPointsIds,
              eventId: userEvents[0],
            });
          }
        });
      }
    })(req, res, next);
  }
});

/**
 * User logout
 */
router.delete('/login', (req, res) => {
  const { user } = req.user;
  req.logout();
  res.send({
    user: user,
    error: null,
  });
});

/**
 * User Registration
 */
router.post('/registration', (req, res) => {
  const { user, password, userTeam, eventId } = req.body;
  // check if eventId is correct(exist)
  database.read('events', { eventId })
    .then(result => {
      // event exist - user can be creat
      if (result) {
        // check if user and teamName doesn't already exist
        database.read('users', { $or: [{ user }, { userTeam }] })
          .then(result => {
            // exist
            if (result) {
              // TODO error name
              res.send({
                user,
                error: 'user exist',
              });
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
                      // TODO error name
                      // added
                      res.send({
                        user,
                        error: null,
                      });
                    })
                    .catch(error => {
                      res.send({
                        user,
                        error,
                      });
                    });
                })
                .catch(error => {
                  // TODO error name
                  res.status(500).send({
                    user,
                    error: error,
                  });
                });
            }
          })
          .catch(error => {
            // TODO error name
            res.status(500).send({
              user,
              error: error,
            });
          });
      } else {
        // TODO error name
        res.status(401).send({
          user,
          error: 'eventId not exist',
        });
      }
    })
    .catch(error => {
      // TODO error name
      res.status(500).send({
        user,
        error,
      });
    });
});

/**
 * User activation account
 */
router.get('/activation/:key', (req, res) => {
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
            // updated
            if (result) {
              res.redirect(302, '/');
            } else {
              // TODO error code
              res.status(500).send({
                user: null,
                error: 'undefined server error',
              });
            }
          })
          .catch(error => {
            // TODO error code
            res.status(500).send({
              user: null,
              error: error,
            });
          });
      } else {
        // TODO error code
        res.status(500).send({
          user: null,
          error: 'undefined server error',
        });
      }
    })
    .catch(error => {
      // TODO error code
      res.status(500).send({
        user: null,
        error,
      });
    });
});

/**
 * Forgot password
 * Send email with remind link
 */
router.post('/remind', (req, res) => {
  const { email } = req.body;
  database.read('users', { user: email })
    .then(() => {
      const forgotKey = utils.getRandomString();
      // Update user data with forgot key and forgot timestamp
      database.update('users', { user: email }, { forgotKey: forgotKey, forgotTimestamp: Date.now() })
        .then(() => {
          // send mail with forgot key
          mail.resetPassword(email, forgotKey)
            .then(() => {
              // TODO error name
              // added
              res.send({
                user: email,
                error: null,
              });
            })
            .catch(() => {
              res.send({
                user: email,
                error: null,
              });
            });
        })
        .catch(() => {
          res.send({
            user: email,
            error: null,
          });
        });
    })
    .catch(() => {
      res.send({
        user: email,
        error: null,
      });
    });
});

/**
 * Forgot password
 * TODO Return HTML if user was ask for change password (not longer then 24h - systemConfig.app.passwordForgotTimeoutInMinutes)
 */
router.get('/remind/:key', (req, res) => {
  const { key } = req.params;
  database.read('users', { forgotKey: key })
    .then((result) => {
      if (result.forgotTimestamp >= Date.now() - (systemConfig.app.passwordForgotTimeoutInMinutes * 60 * 1000)) {
        res.send({
          user: null,
          error: null,
        });
      } else {
        res.status(404).send({
          user: null,
          error: null,
        });
      }
    })
    .catch(() => {
      res.status(404).send({
        user: null,
        error: null,
      });
    });
});

/**
 * Forgot password
 * Change password in Database
 */
router.put('/remind/:key', (req, res) => {
  const { password } = req.body;
  const { key } = req.params;
  database.read('users', { forgotKey: key })
    .then((userData) => {
      if (userData.forgotTimestamp >= Date.now() - (systemConfig.app.passwordForgotTimeoutInMinutes * 60 * 1000)) {
        database.update('users', { _id: database.ObjectId(userData._id) }, { password: utils.getSHA(password) })
          .then(() => {
            res.send({
              user: null,
              error: null,
            });
          })
          .catch(() => {
            res.status(500).send({
              user: null,
              error: null,
            });
          });
      } else {
        res.status(404).send({
          user: null,
          error: null,
        });
      }
    })
    .catch(() => {
      res.status(404).send({
        user: null,
        error: null,
      });
    });
});

module.exports = router;
