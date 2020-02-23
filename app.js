/**
 * HarcMap
 * HarcMap Server
 */
const express = require('express');
const https = require('https');
const fs = require('fs');
const config = require('./config/system.config');
const userController = require('./controllers/user');

// create express app instance
const app = express();

/**
 * Routing
 */
// static files
app.use(express.static('public'));
// user controller
app.use('/user', userController);

/**
 * Https server startup
 */
https.createServer({
	key: fs.readFileSync(config.key),
	cert: fs.readFileSync(config.cert),
}, app).listen(config.port, () => {
	console.log(`\x1b[32m\nHTTPS server \x1b[1mstarted\x1b[0m\x1b[32m [${config.port}]\n\x1b[0m`);
});
