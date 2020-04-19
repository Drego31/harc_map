const express = require('express');
const router = express.Router();
const validator = require('../lib/validator');
const database = require('../lib/mongodb');
const utils = require('../lib/utils');

router.put('/', (request, response) => {
  const json = request.body;
  const error = validator.validate(
    validator.methods.validateEventCollectPutRequest, json);

  response.send({
    user: json.user ? json.user : null,
    error: error,
  });
});

module.exports = router;
