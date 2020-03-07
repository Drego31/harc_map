const express = require('express');
const router = express.Router();
const validator = require('../lib/validator');
// const database = require('../lib/mongodb');

router.post('/', (request, response) => {
  const error = validator.validate(
    validator.validateUserPostRequest,
    request.body);

  response.send({
    user: request.body.user ? request.body.user : null,
    error: error,
  });
});

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

router.post('/login/', (request, response) => {
  response.send({
    user: 'example@example.pl',
    teamName: 'example team name',
    collectedPointsIds: [1, 2, 3],
    eventId: '1234',
    error: null,
  });
});

router.delete('/login/', (request, response) => {
  response.send({
    user: 'example@example.pl',
    error: null,
  });
});

/*
router.get('/', (req, res) => {
  database.read('users').then(result => {
    res.send(result);
  }).catch(error => {
    res.status(404).send(error);
  });
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
