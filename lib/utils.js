/**
 * Utils module
 */
const fs = require('fs');
const path = require('path');
const { SHA3 } = require('sha3');
const logs = require('./logs');
const validateCodes = require('./validateCodes');

const { DATABASE_DATA_ERROR, DATABASE_NO_RESULT_ERROR } = validateCodes;

/**
 * @description Gererate random string based on given length
 * @param length {number}
 * @return {string}
 */
function generateRandomString (length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/**
 * @description Validate config file
 * @return {any}
 */
function getSystemConfig () {
  // path to config
  const configLocation = path.resolve(__dirname, '../config/system.config.json');
  try {
    return JSON.parse(fs.readFileSync(configLocation, 'utf8'));
  } catch (e) {
    logs.configError(configLocation);
    // exit from program
    process.exit();
  }
}

/**
 * @description Generate SHA3-512 from given string
 * Used in registration and login
 * @param text {string}
 * @return {string}
 */
function getSHA (text) {
  const hash = new SHA3(512);
  hash.update(text);
  return hash.digest('hex');
}

/**
 * @description Gererate random hashed string
 * @return {string}
 */
function generateAccessKey () {
  return getSHA(generateRandomString(10));
}

/**
 * @description Check if App working in development environment
 * @return {boolean}
 */
function envIsDevelopment () {
  return process.env.NODE_ENV === 'development';
}

/**
 * @description Method checking if result from db is not empty
 * @param result {array}
 * @param [errorCode] {number}
 * @return {array|boolean}
 */
function throwIfEmpty (result, errorCode = DATABASE_NO_RESULT_ERROR) {
  if (result.length !== 0) {
    return result;
  } else {
    throw errorCode;
  }
}

/**
 * @description Method throw errorCode if first parameter is fulfilled
 * @param result {*}
 * @param condition {*}
 * @param errorCode {number}
 * @return {*}
 */
function throwIf (result, condition, errorCode) {
  if (condition) {
    throw errorCode;
  } else {
    return result;
  }
}

/**
 * @description Function sending error response and log them
 * @param response {object} - "http" server response object
 * @param httpStatus {number} - HTTP State Code to send
 * @param errorCode {number} - error number
 * @param [errorMsg] {string} - error message
 * @return {undefined}
 */

function responseUserError (response, httpStatus, errorCode, errorMsg) {
  const responseObject = {
    user: null,
    error: errorCode,
  };

  responseError(response, httpStatus, errorMsg, responseObject);
}

function responseDatabaseError (response, responseObject, error) {
  responseObject.error = DATABASE_DATA_ERROR;
  responseError(response, 200, error, responseObject);
}

function responseDatabaseNoData (response, responseObject) {
  responseObject.error = DATABASE_NO_RESULT_ERROR;
  responseError(response, 200, null, responseObject);
}

function responseError (response, httpStatus, errorMsg, responseObject) {
  response.status(httpStatus).send(responseObject);
  if (errorMsg) console.trace(errorMsg);
}

module.exports = {
  getSystemConfig,
  getSHA,
  generateRandomString,
  generateAccessKey,
  envIsDevelopment,
  throwIf,
  throwIfEmpty,
  responseDatabaseError,
  responseDatabaseNoData,
  responseUserError,
  responseError,
};
