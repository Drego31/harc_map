/**
 * @description Strategies for passport-local module
 *
 */
const LocalStrategy = require('passport-local').Strategy;
const utils = require('./utils');
const database = require('./mongodb');

/**
 * @description Data stored in session
 * @param userData
 * @return {object}
 * @private
 */
function __getSessionData (userData) {
  return {
    _id: userData._id,
    user: userData.user,
    userEvents: [userData.eventId],
  };
}

/**
 * @description Function responsible for auth user
 * @param passport
 */
function setStrategy (passport) {
  passport.use(new LocalStrategy({
    usernameField: 'user',
    passwordField: 'password',
  }, function (user, password, done) {
    // function returning failed login message
    const incorrectData = (error) => {
      return done(error || 'login failed');
    };

    database.read('users', { user }).then(result => {
      if (result) {
        // check password
        const hashedPass = utils.getSHA(password);
        if (hashedPass === result.password) {
          // success login
          if (result.accountIsActive) {
            return done(null, __getSessionData(result));
          } else {
            return done('account is not active');
          }
        } else {
          // invalid password
          incorrectData('invalid password');
        }
      } else {
        incorrectData('user not exist');
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
  }).catch(error => {
    done('unhandled deserialize user error');
  });
}

module.exports = {
  setStrategy,
  serializeUser,
  deserializeUser,
};
