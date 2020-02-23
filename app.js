const express = require('express');
const https = require('https');
const fs = require('fs');

const config = require('./config/system.config');
const userController = require('./controllers/user');

// create express app instance
const app = express();
const ENV_DEVELOPMENT = process.env.NODE_ENV === 'development';
// server port
const port = config.app.port;
const key = config.app.key;
const cert = config.app.cert;

// Access Control Allow Origin for development purpose
if (ENV_DEVELOPMENT) {
	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
		res.header("Access-Control-Allow-Headers", "*");
		next();
	});
}

/**
 * @description Routing
 */
// static files
app.use(express.static('public', {
	maxAge: 0
}));
// user controller
app.use('/user', userController);
// index rewrite
app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

// https
https.createServer({
	key: fs.readFileSync(key),
	cert: fs.readFileSync(cert),
}, app).listen(port, () => {
	console.log(`Start HTTPS server. Listening on port ${ port }`);
});
