const express = require('express');
const router = express.Router();
const validator = require('../lib/validator');
const database = require('../lib/mongodb');
const utils = require('../lib/utils');
const passport = require('passport');
const mail = require('../lib/mail');

// TODO Walidaca

// TODO For tests
router.get('/', (req, res) => {
  database.read('users', {}, true).then(result => {
    res.json({
      result,
      logged: req.isAuthenticated(),
    });
  }).catch(error => {
    res.status(404).send(error);
  });
});

/**
 * User Registration
 */
router.post('/', (req, res) => {
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
              res.json({
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
                accountCreated: Date.now(),
                collectedPointsIds: [],
              };
              database.create('users', [newUserData])
                .then(() => {
                  mail.accountActivation(user, newUserData.activationKey)
                    .then(() => {
                      // TODO error name
                      // added
                      res.json({
                        user,
                        error: null,
                      });
                    })
                    .catch(error => {
                      res.json({
                        user,
                        error,
                      });
                    });
                })
                .catch(error => {
                  // TODO error name
                  res.status(500).json({
                    user,
                    error: error,
                  });
                });
            }
          })
          .catch(error => {
            // TODO error name
            res.status(500).json({
              user,
              error: error,
            });
          });
      } else {
        // TODO error name
        res.status(401).json({
          user,
          error: 'eventId not exist',
        });
      }
    })
    .catch(error => {
      // TODO error name
      res.status(500).json({
        user,
        error,
      });
    });
});

/**
 * User login
 */
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (error, userData) => {
    if (error || !userData) {
      // failed login
      // TODO error name
      res.status(401).json({
        user: null,
        error,
      });
    } else {
      req.login(userData, error => {
        // error with setting session
        if (error) {
          // TODO error name
          res.status(500).json({
            user: null,
            error: 'unhandled session error',
          });
        } else {
          const { user, teamName, collectedPointsIds, userEvents } = userData;
          res.json({
            user,
            teamName,
            collectedPointsIds,
            eventId: userEvents[0],
          });
        }
      });
    }
  })(req, res, next);
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
 * User activation account
 */
router.get('/activation/:key', (req, res) => {
  const { key } = req.params;
  database.read('users', { activationKey: key })
    .then(result => {
      if (result && !result.accountIsActive) {
        console.log(result);
        database.update('users', { _id: database.ObjectId(result._id) }, {
            accountIsActive: true,
            activationKey: null,
          })
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
      res.status(500).json({
        user: null,
        error,
      });
    });
});

// TODO remind

// router.post('/', (request, response) => {
//   response.send({
//     user: 'example@example.pl',
//     error: null,
//   });
// });

router.post('/remind/', (request, response) => {
  response.send({
    user: 'example@example.pl',
    error: null,
  });
});

router.put('/remind/', (request, response) => {
  response.send({
    user: 'example@example.pl',
    error: null,
  });
});

// router.post('/login/', (request, response) => {
//   response.send({
//     user: 'example@example.pl',
//     teamName: 'example team name',
//     collectedPointsIds: [1, 2, 3],
//     eventId: '1234',
//     error: null,
//   });
// });

// router.delete('/login/', (request, response) => {
//   response.send({
//     user: 'example@example.pl',
//     error: null,
//   });
// });

/*
router.get('/', (req, res) => {
  database.read('users').then(result => {
    res.json({isAuthenticated: req.isAuthenticated(), user: req.user});
  }).catch(error => {
    res.status(404).send(error);
  });
});

router.post('/', (req, res, next) => {
  passport.authenticate('local', (error, user) => {
    if (error || !user) {
      // failed login
      res.status(401).json({
        email: null,
        error,
      });
    } else {
      req.login(user, error => {
        // error with setting session
        if (error) {
          res.status(500).json({
            email: null,
            error: 'unhandled session error',
          });
        } else {
          const dataSendToUser = Object.assign({}, user);
          delete dataSendToUser.id;
          res.json(dataSendToUser);
        }
      });
    }
  })(req, res, next);
});

router.get('/add', (req, res) => {
  database.creat('users', [{
    email: 'another@example.example',
    password: 'example2',
    eventId: 1234567890,
  }]).then(result => {
    res.send(result);
  }).catch(error => {
    res.status(404).send(error);
  });
});

router.get('/remove', (req, res) => {
  database.remove('users', {
    email: { $eq: 'another@example.example' },
  }).then(result => {
    res.send(result);
  }).catch(error => {
    res.status(404).send(error);
  });
});
*/

module.exports = router;
