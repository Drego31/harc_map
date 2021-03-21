const database = require('../mongodb');
const appConfig = require('../../config/system.config.json').app;
const errorCodes = require('../validateCodes');
const {
  notAllowedReloginTime,
  multipleLoginPenaltyTime,
} = appConfig;

/**
 * @param _id {number} - Mongodb ObjectID number
 * @param loginHistory {object}
 * @return {Promise}
 */
function saveLoginHistoryData (_id, loginHistory) {
  return database.update('users', { _id: database.ObjectId(_id) }, { loginHistory });
}

function readLoginHistoryData (_id) {
  return database.read('users', { _id: database.ObjectId(_id) })
    .then(userData => userData.loginHistory || {});
}

function reloginTimeExceed (lastLoginTime) {
  return lastLoginTime + (notAllowedReloginTime * 1000) > Date.now();
}

function userIsBanned (loginCount, lastLoginTime) {
  return loginCount > 3 && lastLoginTime + (multipleLoginPenaltyTime * 1000) > Date.now();
}

function getAlreadyLoggedUserSession (_id) {
  return database.read('sessions', { 'session.passport.user._id': _id })
    .then(sessionData => {
      if (sessionData) {
        return sessionData;
      } else {
        throw errorCodes.SESSION_DOESNT_EXIST;
      }
    });
}

function removeAlreadyLoggedUserSession (_id) {
  return getAlreadyLoggedUserSession(_id)
    .then((sessionData) => database.remove('sessions', { _id: sessionData._id }), () => {});
}

/**
 *
 * @param userData
 * @param userUUID
 * @return Promise (or catch error)
 */
function verify (userData, userUUID) {
  const { _id } = userData;
  let warnCode = null;

  return readLoginHistoryData(_id)
    .then(userLoginHistory => {
      let {
        loginCount = 1,
        lastLoginTime = Date.now(),
        lastLoginUUID,
      } = userLoginHistory;

      // system start for different uuid
      if (lastLoginUUID && lastLoginUUID !== userUUID) {
        if (userIsBanned(loginCount, lastLoginTime)) {
          // ban error
          throw errorCodes.TO_MANY_CROSSDEVICE_VISITS;
        } else if (reloginTimeExceed(lastLoginTime)) {
          if (loginCount === 2) {
            warnCode = errorCodes.FIRST_WARN_FROM_CROSSDEVICE_VISIT;
          } else if (loginCount === 3) {
            warnCode = errorCodes.LAST_WARN_FROM_CROSSDEVICE_VISIT;
          }
          loginCount++;
        }
      }

      return {
        loginCount,
        lastLoginTime,
        lastLoginUUID: userUUID,
        warnCode,
      };
    })
    // update userLoginHistory
    .then(userLoginHistory => saveLoginHistoryData(_id, userLoginHistory))
    // clear sessions
    .then(() => removeAlreadyLoggedUserSession(_id))
    // return userData
    .then(() => userData);
}

module.exports = verify;
