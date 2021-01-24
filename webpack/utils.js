const path = require('path');
const fs = require('fs');
const glob = require('glob');

module.exports = {
  resolve (dir) {
    return path.resolve(path.join(__dirname, '..'), dir);
  },
  removeOldBundleFiles (regexPath) {
    try {
      const files = glob.sync(regexPath);
      for (const file of files) {
        fs.unlinkSync(file);
      }
    } catch (err) {
      throw new Error('Removing old bundles went wrong');
    }
  },
  getAppVersionFromPackageJSON (filePath = 'package.json') {
    const rawData = fs.readFileSync(filePath);
    if (rawData) {
      const packageJSON = JSON.parse(rawData);
      if (packageJSON) {
        return packageJSON.version;
      }
      throw new Error('Error: package.json file is not JSON format');
    }
    throw new Error('Error: package.json file is unreachable');
  },
};
