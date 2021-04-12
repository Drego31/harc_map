/**
 * HarcMap
 */
const logs = require('./lib/logs');
const utils = require('./lib/utils');
// Environment
const ENV_DEVELOPMENT = utils.envIsDevelopment();
logs.init(ENV_DEVELOPMENT);
// Modules
const express = require('express');
const passport = require('passport');
const https = require('https');
const fs = require('fs');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const passportConfig = require('./lib/passportConfig');
const connectionString = require('./lib/mongodb').connectionString;
const appConfig = utils.getSystemConfig().app;
const permissions = require('./middleware/permissions');

// Swagger
const swaggerUi = require('swagger-ui-express');
const specs = require('./spec/swagger.js');
// const swaggerDocument = require('./swagger.json');

// Controllers
const userController = require('./controllers/user/index');
const pointController = require('./controllers/point/index');
const eventController = require('./controllers/event');
const eventPointController = require('./controllers/eventPoint');
const eventPointsController = require('./controllers/eventPoints');
const pointCollectController = require('./controllers/pointCollect');
const pointCategoriesController = require('./controllers/pointCategories');
const statsOfCollectedController = require('./controllers/statsOfCollected');
const informationController = require('./controllers/information');

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

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}
app.use(expressSession(Object.assign(sessionConfig, {
  store: new MongoStore({
    url: connectionString,
    // dbName: 'harcmap-sessions',
    stringify: false,
  }),
})));
// console.log(sessionConfig);
app.use(passport.initialize());
app.use(passport.session());

// access middleware - permissions
app.use(permissions);

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
app.use(express.static('vendors', {
  maxAge: ENV_DEVELOPMENT ? 0 : appConfig.cacheValue,
}));

// user controller
app.use('/user', userController);
app.use('/information', informationController);
app.use('/point', pointController);
app.use('/event', eventController);
app.use('/event/point', eventPointController);
app.use('/event/points', eventPointsController);
app.use('/event/point/collect', pointCollectController);
app.use('/event/point/categories', pointCategoriesController);
app.use('/admin/collected/stats', statsOfCollectedController);

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
