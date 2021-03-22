/**
 * @description Strategies for passport-local module
 *
 */
const LocalStrategy = require('passport-local').Strategy;
const utils = require('./utils');
const database = require('./mongodb');
const errorsCodes = require('../lib/validateCodes');
const loginOnMultipleDevices = require('../lib/security/loginOnMultipleDevices');
const appConfig = require('../config/system.config.json').app;
const {
  uuidKey,
} = appConfig;

/**
 * @description Data stored in session
 * @param userData {object} - user data from database
 * @return {object}
 * @private
 */
function __getSessionData (userData) {
  return {
    _id: userData._id,
    user: userData.user,
    userTeam: userData.userTeam,
    userEvents: userData.userEvents,
    accountType: userData.accountType,
    limitedPermissions: userData.limitedPermissions,
  };
}

/**
 * @description Get uuid from user cookie
 * @param request
 * @return {string|null}
 * @private
 */
function __getUUIDFromCookies (request) {
  const { cookies } = request;
  const uuid = cookies[uuidKey];
  return uuid || null;
}

/**
 * @description Function responsible for auth user
 * @param passport {object} - Password object
 */
function setStrategy (passport) {
  // passReqToCallback - option of Passport that pass request object to callback, before user field
  passport.use(new LocalStrategy({
    usernameField: 'user',
    passwordField: 'password',
    passReqToCallback: true,
  }, function (request, user, password, done) {
    // function returning failed login message
    const incorrectData = (error) => {
      return done(error || errorsCodes.LOGIN_FAILED);
    };

    database.read('users', { user })
      // check if user exist
      .then(utils.throwIfEmpty)
      // check password
      .then(result => {
        const hashedPass = utils.getSHA(password);

        if (hashedPass === result.password) {
          return result;
        } else {
          throw errorsCodes.LOGIN_INVALID_PASSWORD;
        }
      })
      // account is active
      .then(result => {
        if (result.accountIsActive) {
          return result;
        } else {
          throw errorsCodes.ACCOUNT_IS_INACTIVE;
        }
      })
      .then(userData => loginOnMultipleDevices(userData, __getUUIDFromCookies(request)))
      .then((result) => {
        return done(null, __getSessionData(result));
      })
      .catch(incorrectData);
  }));
}

// Setting user to session
function serializeUser (userData, done) {
  done(null, {
    _id: userData._id,
  });
}

// Setting user from session
function deserializeUser (sessionStorage, done) {
  const _id = sessionStorage ? sessionStorage._id : null;

  database.read('users', { _id: database.ObjectId(_id) })
    .then(utils.throwIfEmpty)
    .then(result => {
      done(null, __getSessionData(result));
    })
    .catch(errorCode => {
      console.error('Deserialize error', errorCode);
      done(errorsCodes.DATABASE_DATA_ERROR);
    });
}

module.exports = {
  setStrategy,
  serializeUser,
  deserializeUser,
};
