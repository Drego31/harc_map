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
    // function returning failed login message
    const incorrectData = (error) => {
      return done(error || errorsCodes.LOGIN_FAILED);
    };

    database.read('users', { user }).then(result => {
      if (result) {
        // check password
        const hashedPass = utils.getSHA(password);
        if (hashedPass === result.password) {
          // success login
          if (result.accountIsActive) {
            // can only exist one session per user
            database.read('sessions', { 'session.passport.user': result._id })
              .then(session => {
                if (session) {
                  incorrectData(errorsCodes.USER_IS_LOGGED_ON_ANOTHER_DEVICE);
                } else {
                  return done(null, __getSessionData(result));
                }
              })
              .catch(incorrectData);
          } else {
            incorrectData(errorsCodes.ACCOUNT_IS_INACTIVE);
          }
        } else {
          // invalid password
          incorrectData(errorsCodes.LOGIN_INVALID_PASSWORD);
        }
      } else {
        incorrectData(errorsCodes.LOGIN_INVALID_USER);
      }
    }).catch(incorrectData);
  }));
}

// Setting user to session
function serializeUser (user, done) {
  done(null, user._id);
}

// Setting user from session
function deserializeUser (_id, done) {
  database.read('users', { _id: database.ObjectId(_id) }).then(result => {
    done(null, __getSessionData(result));
  }).catch(() => {
    console.error('Deserialize error');
    done(errorsCodes.DATABASE_DATA_ERROR);
  });
}

module.exports = {
  setStrategy,
  serializeUser,
  deserializeUser,
};
