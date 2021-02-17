const express = require('express');
const router = express.Router();

const user = require('./user');
const login = require('./login');
const activation = require('./activation');
const remind = require('./remind');

router.use('/', user);
router.use('/login', login);
router.use('/activation', activation);
router.use('/remind', remind);

module.exports = router;
