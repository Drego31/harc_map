/**
 * @description Strategies for passport-local module
 *
 */
const LocalStrategy = require('passport-local').Strategy;
const utils = require('./utils');
const database = require('./mongodb');
const errorsCodes = require('../lib/validateCodes');
const appConfig = require('../config/system.config.json').app;
const {
  uuidKey,
  notAllowedReloginTime,
  multipleLoginPenaltyTime,
} = appConfig;

/**
 * @description Data stored in session
 * @param userData {object} - user data from database
 * @param uuid {string} - user unique id
 * @param loginCount {number}
 * @param lastLoginTime {number}
 * @return {object}
 * @private
 */
function __getSessionData (userData, uuid, loginCount, lastLoginTime) {
  return {
    _id: userData._id,
    user: userData.user,
    userUUID: uuid,
    userTeam: userData.userTeam,
    userEvents: userData.userEvents,
    accountType: userData.accountType,
    loginHistory: {
      count: loginCount,
      lastLoginTime: lastLoginTime,
    },
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
      // can only exist one session per user
      .then(result => {
        database.read('sessions', { 'session.passport.user._id': result._id })
          .then(session => {
            const isAuthorOfThisSession = __checkSessionUUID(session, request.cookies);
            const uuid = __getUUIDFromCookies(request);

            // existed user
            if (session) {
              if (isAuthorOfThisSession) {
                // no penalty
                database.remove('sessions', { _id: session._id })
                  .then(() => {
                    return done(null, __getSessionData(result, uuid, 1, Date.now()));
                  });
              } else {
                const { loginHistory } = request.user;
                let warnCode = null;
                let loginCount = 1;
                // check if user dont have penalty
                if (loginHistory.count > 3 && loginHistory.lastLoginTime + (multipleLoginPenaltyTime * 1000) > Date.now()) {
                  // penalty
                  warnCode = 3;
                  loginCount++;
                } else if (loginHistory.lastLoginTime + (notAllowedReloginTime * 1000) > Date.now()) {
                  // check relogin time
                  if (loginHistory.count === 3) {
                    // last warn
                    warnCode = 2;
                    loginCount++;
                  } else {
                    // warn
                    warnCode = 1;
                    loginCount++;
                  }
                }
                const userData = __getSessionData(result, uuid, loginCount, Date.now());
                if (warnCode) {
                  userData.warn = warnCode;
                }
                return done(null, userData);
              }
            } else {
              // new user
              return done(null, __getSessionData(result, uuid, 1, Date.now()));
            }
          });
      })
      .catch(incorrectData);
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
    .then(utils.throwIfEmpty)
    .then(result => {
      const {
        userUUID,
        loginHistory,
      } = sessionStorage;
      const {
        count,
        lastLoginTime,
      } = loginHistory;

      done(null, __getSessionData(result, userUUID, count, lastLoginTime));
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
