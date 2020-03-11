/**
 * Utils module
 */
const fs = require('fs');
const path = require('path');
const { SHA3 } = require('sha3');
const logs = require('./logs');

/**
 * @description Gererate random string based on given length
 * @param length {number}
 * @return {string}
 */
function __generateRandomString (length) {
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
function getRandomString () {
  return getSHA(__generateRandomString(10));
}

/**
 * @description Check if App working in development environment
 * @return {boolean}
 */
function envIsDevelopment () {
  return process.env.NODE_ENV === 'development';
}

module.exports = {
  getSystemConfig,
  getSHA,
  getRandomString,
  envIsDevelopment,
};
