/**
 * @description Strategies for passport-local module
 *
 */
const LocalStrategy = require('passport-local').Strategy;
const utils = require('./utils');
const mongodb = require('mongodb');
const mongo = require('./mongodb');

function __getSessionData (user) {
  return {
    id: user._id,
    email: user.email,
    userEvents: user.userEvents,
  };
}

/**
 * @description Function responsible for auth user
 * @param passport
 */
function setStrategy (passport) {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, function (email, password, done) {
    // function returning failed login message
    const incorrectData = () => {
      return done('login failed');
    };

    mongo.read('users', { email }).then(result => {
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
