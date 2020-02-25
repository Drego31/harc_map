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
const ENV_DEVELOPMENT = process.env.NODE_ENV === 'development';
// Log environment
console.log(`\u{1F680} App run in \x1b[1m${ENV_DEVELOPMENT ? 'DEVELOPMENT' : 'PRODUCTION'}\x1b[0m mode`);

// Access Control Allow Origin for development purpose
if (ENV_DEVELOPMENT) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });
}

/**
 * Routing
 */
// static files
// maxAge - Cache-Control header in milliseconds
app.use(express.static('public', {
  maxAge: ENV_DEVELOPMENT ? 0 : config.cacheValue,
}));
// user controller
app.use('/user', userController);
// index rewrite
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

/**
 * Https server startup
 */
https.createServer({
  key: fs.readFileSync(config.key),
  cert: fs.readFileSync(config.cert),
}, app).listen(config.port, () => {
  console.log(`   \x1b[32mHTTPS server \x1b[1mstarted\x1b[0m\x1b[32m [${config.port}]\n\x1b[0m`);
});
