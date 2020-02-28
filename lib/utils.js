const fs = require('fs');
const path = require('path');
const logs = require('./logs');

function getSystemConfig () {
  const configLocation = path.resolve(__dirname, '../config/system.config.json');
  try {
    return JSON.parse(fs.readFileSync(configLocation, 'utf8'));
  } catch (e) {
    logs.configError(configLocation);
    process.exit();
  }
}

module.exports = {
  getSystemConfig,
};
