/**
 * @description Strategies for passport-local module
 *
 */
const LocalStrategy = require('passport-local').Strategy;
const utils = require('./utils');
const database = require('./mongodb');
const errorsCodes = require('../lib/validateCodes');

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
  };
}

/**
 * @description Function responsible for auth user
 * @param passport {object} - Password object
 */
function setStrategy (passport) {
  passport.use(new LocalStrategy({
    usernameField: 'user',
    passwordField: 'password',
  }, function (user, password, done) {

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
      // can only exist one session per user
      .then(result => {
        database.read('sessions', { 'session.passport.user': result._id })
          .then(session => {
            if (session) {
              return done(errorsCodes.USER_IS_LOGGED_ON_ANOTHER_DEVICE);
            } else {
              return done(null, __getSessionData(result));
            }
          });
      })
      .catch(errorCode => done(errorCode || errorsCodes.LOGIN_INVALID_USER));
  }));
}

// Setting user to session
function serializeUser (user, done) {
  done(null, user._id);
}

// Setting user from session
function deserializeUser (_id, done) {
  database.read('users', { _id: database.ObjectId(_id) })
    .then(utils.throwIfEmpty)
    .then(result => {
      done(null, __getSessionData(result));
    })
    .catch(errorCode => {
      if (errorCode === errorsCodes.DATABASE_NO_RESULT_ERROR) {
        done(null, __getSessionData(result));
      } else {
        console.error('Deserialize error');
        done(errorsCodes.DATABASE_DATA_ERROR);
      }
    });
}

module.exports = {
  setStrategy,
  serializeUser,
  deserializeUser,
};
