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
  const timestamp = Date.now();

  console.log('strategy start', 0);
  passport.use(new LocalStrategy({
    usernameField: 'user',
    passwordField: 'password',
  }, function (user, password, done) {
    // function returning failed login message
    const incorrectData = (error) => {
      console.log('strategy incorrectData', (Date.now() - timestamp) / 1000 + ' s');
      return done(error || errorsCodes.LOGIN_FAILED);
    };

    console.log('strategy before users', (Date.now() - timestamp) / 1000 + ' s');
    database.read('users', { user }).then(result => {
      console.log('strategy after users', (Date.now() - timestamp) / 1000 + ' s');
      if (result) {
        // check password
        const hashedPass = utils.getSHA(password);
        if (hashedPass === result.password) {
          // success login
          if (result.accountIsActive) {
            // can only exist one session per user
            console.log('strategy before session', (Date.now() - timestamp) / 1000 + ' s');
            database.read('sessions', { 'session.passport.user': result._id })
              .then(session => {
                console.log('strategy after session', (Date.now() - timestamp) / 1000 + ' s');
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
  const timestamp = Date.now();
  console.log('deserialize init', (Date.now() - timestamp) / 1000 + ' s');

  database.read('users', { _id: database.ObjectId(_id) }).then(result => {
    console.log('deserialize after users', (Date.now() - timestamp) / 1000 + ' s');
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
