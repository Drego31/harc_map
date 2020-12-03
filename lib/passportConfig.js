/**
 * @description Strategies for passport-local module
 *
 */
const LocalStrategy = require('passport-local').Strategy;
const utils = require('./utils');
const database = require('./mongodb');
const errorsCodes = require('../lib/validateCodes');
const uuidKey = 'hm.u.u.i.d';

/**
 * @description Data stored in session
 * @param userData {object} - user data from database
 * @param uuid {string} - user unique id
 * @return {object}
 * @private
 */
function __getSessionData (userData, uuid) {
  return {
    _id: userData._id,
    user: userData.user,
    userUUID: uuid,
    userTeam: userData.userTeam,
    userEvents: userData.userEvents,
    accountType: userData.accountType,
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
 * @description Check if user is creator of found session
 * @param sessionDocument {object|null}
 * @param requestCookie {object}
 * @return {boolean}
 * @private
 */
function __checkSessionUUID (sessionDocument, requestCookie) {
  const passportData = sessionDocument ? sessionDocument.session.passport.user : {};
  const sessionUUID = passportData.userUUID;
  const cookiesUUID = requestCookie[uuidKey];

  return sessionUUID && cookiesUUID && sessionUUID === cookiesUUID;
}

/**
 * @description Function responsible for auth user
 * @param passport {object} - Password object
 */
function setStrategy (passport) {
  passport.use(new LocalStrategy({
    usernameField: 'user',
    passwordField: 'password',
    passReqToCallback: true,
  }, function (request, user, password, done) {
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
            database.read('sessions', { 'session.passport.user._id': result._id })
              .then(session => {
                const isAuthorOfThisSession = __checkSessionUUID(session, request.cookies);
                const createNewSession = () => {
                  // add uuid to session object
                  const uuid = __getUUIDFromCookies(request);
                  return done(null, __getSessionData(result, uuid));
                };

                if (session) {
                  if (isAuthorOfThisSession) {
                    database.remove('sessions', { _id: session._id })
                      .then(() => {
                        createNewSession();
                      });
                  } else {
                    incorrectData(errorsCodes.USER_IS_LOGGED_ON_ANOTHER_DEVICE);
                  }
                } else {
                  createNewSession();
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
function serializeUser (userData, done) {
  done(null, {
    _id: userData._id,
    userUUID: userData.userUUID,
  });
}

// Setting user from session
function deserializeUser (sessionStorage, done) {
  const _id = sessionStorage ? sessionStorage._id : null;
  database.read('users', { _id: database.ObjectId(_id) })
    .then(result => {
      done(null, __getSessionData(result, sessionStorage.userUUID));
    })
    .catch(() => {
      done(errorsCodes.DATABASE_DATA_ERROR);
    });
}

module.exports = {
  setStrategy,
  serializeUser,
  deserializeUser,
};
