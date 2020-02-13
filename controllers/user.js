// TODO
const express = require('express');
const db = require("../lib/database");
const router = express.Router();

router.get('/', function (req, res) {
	res.send('user');
});

module.exports = router;