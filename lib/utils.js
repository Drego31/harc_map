/**
 * Utils module
 */
const fs = require('fs');
const path = require('path');
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

module.exports = {
  getSystemConfig,
};
