const express = require('express');
const router = express.Router();
const database = require('../lib/mongodb');

router.get('/',(req, res) => {
	database.read("users").then(result => {
		res.send(result);
	}).catch(error => {
		res.status(404).send(error);
	})
});

router.get('/add',(req, res) => {
	database.creat("users", [{
		email: 'another@example.example',
		password: 'example2',
		eventId: 1234567890
	}]).then(result => {
		res.send(result);
	}).catch(error => {
		res.status(404).send(error);
	})
});

router.get('/remove',(req, res) => {
	database.remove("users", [{
		email: 'another@example.example',
	}]).then(result => {
		res.send(result);
	}).catch(error => {
		res.status(404).send(error);
	})
});

module.exports = router;