const https = require('https');
const fs = require('fs');

function downloadSingleFile (source, destination, fileName) {
  return new Promise((resolve, reject) => {
    const fileDestination = destination + fileName
    const file = fs.createWriteStream(fileDestination);

    https.get(source + fileName, response => {
      const responseIsOk = response.statusCode === 200;

      if (responseIsOk) {
        response.pipe(file);
        console.log(fileName + ' -> ' + destination);
        resolve();
      } else {
        console.error(response.statusCode + ': ' + response.statusMessage);
        reject(response.statusCode + ': ' + response.statusMessage);
      }
    });
  });
}

module.exports = {
  downloadSingleFile,
};
