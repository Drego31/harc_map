const express = require('express');
const router = express.Router();
const validator = require('../lib/validator');
const database = require('../lib/mongodb');
const passport = require('passport');

router.post('/', (request, response) => {
  const json = request.body;
  const error = validator.validate(
    validator.methods.validateUserPostRequest, json);

  response.send({
    user: json.user ? json.user : null,
    error: error,
  });
});

router.post('/remind/', (request, response) => {
  const json = request.body;
  const error = validator.validate(
    validator.methods.validateUserRemindPostRequest, json);

  response.send({
    user: json.user ? json.user : null,
    error: error,
  });
});

router.put('/remind/', (request, response) => {
  const json = request.body;
  const error = validator.validate(
    validator.methods.validateUserRemindPutRequest, json);

  response.send({
    user: json.user ? json.user : null,
    error: error,
  });
});

router.post('/login/', (request, response) => {
  const json = request.body;
  const error = validator.validate(
    validator.methods.validateUserLoginPostRequest, json);

  response.send({
    user: json.user ? json.user : null,
    teamName: 'example team name', // DB
    collectedPointsIds: [1, 2, 3], // DB
    eventId: '1234', // DB
    error: error,
  });
});

router.delete('/login/', (request, response) => {
  const json = request.body;
  const error = validator.validate(
    validator.methods.validateUserLoginDeleteRequest, json);

  response.send({
    user: json.user ? json.user : null,
    error: error,
  });
});

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
