const express = require('express');
const router = express.Router();
const database = require('../lib/mongodb');

router.get('/', function (req, res) {
	res.send('user');
});

module.exports = router;