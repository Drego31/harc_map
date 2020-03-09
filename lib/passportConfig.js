/**
 * @description Strategies for passport-local module
 *
 */
const LocalStrategy = require('passport-local').Strategy;
const utils = require('./utils');
const mongodb = require('mongodb');
const mongo = require('./mongodb');

/**
 * @description Data stored in session
 * @param userData
 * @return {object}
 * @private
 */
function __getSessionData (userData) {
  return {
    id: userData._id,
    user: userData.user,
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
    const incorrectData = () => {
      return done('login failed');
    };

    mongo.read('users', { user }).then(result => {
      // check password
      const hashedPass = utils.getSHA(password);
      if (hashedPass === result.password) {
        // success login
        return done(null, __getSessionData(result));
      } else {
        // invalid password
        incorrectData();
      }
    }).catch(incorrectData);
  }));
}

// Setting user to session
function serializeUser (user, done) {
  done(null, user.id);
}

// Setting user from session
function deserializeUser (_id, done) {
  mongo.read('users', { _id: mongodb.ObjectId(_id) }).then(result => {
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
