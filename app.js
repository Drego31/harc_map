/**
 * HarcMap
 */
const logs = require('./lib/logs');
// Environment
const ENV_DEVELOPMENT = process.env.NODE_ENV === 'development';
logs.init(ENV_DEVELOPMENT);

const express = require('express');
const passport = require('passport');
const https = require('https');
const fs = require('fs');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const utils = require('./lib/utils');
const passportConfig = require('./lib/passportConfig');
const appConfig = utils.getSystemConfig().app;

// Controllers
const userController = require('./controllers/user');
const eventController = require('./controllers/event');

// Create express app instance
const app = express();

/**
 * Configuration
  */
app.use(bodyParser.json());
app.use(cookieParser());

// Session
const sessionConfig = appConfig.session;
if (ENV_DEVELOPMENT) {
  // Session cookie for development
  Object.assign(sessionConfig.cookie, {
    secure: false,
    httpOnly: false,
    sameSite: false,
  });

  // Access Control Allow Origin for development purpose
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
  });
}
app.use(expressSession(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(passportConfig.serializeUser);
passport.deserializeUser(passportConfig.deserializeUser);
passportConfig.setStrategy(passport);

/**
 * Routing
 */
// static files
// maxAge - Cache-Control header in milliseconds
app.use(express.static('public', {
  maxAge: ENV_DEVELOPMENT ? 0 : appConfig.cacheValue,
}));
// user controller
app.use('/user', userController);
app.use('/event', eventController);
// index rewrite
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

/**
 * Https server startup
 */
https.createServer({
  key: fs.readFileSync(appConfig.key),
  cert: fs.readFileSync(appConfig.cert),
}, app).listen(appConfig.port, () => {
  console.log(`   \x1b[32mHTTPS server \x1b[1mstarted\x1b[0m\x1b[32m [${appConfig.port}]\n\x1b[0m`);
});
