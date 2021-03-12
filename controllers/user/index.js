const express = require('express');
const router = express.Router();

const user = require('./user');
const login = require('./login');
const activation = require('./activation');
const remind = require('./remind');
const all = require('./all');

router.use('/', user);
router.use('/login', login);
router.use('/activation', activation);
router.use('/remind', remind);
router.use('/all', all);

module.exports = router;
