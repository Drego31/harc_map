/**
 * Utils module
 */
const fs = require('fs');
const path = require('path');
const { SHA3 } = require('sha3');
const logs = require('./logs');

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

module.exports = {
  getSystemConfig,
  getSHA,
};
