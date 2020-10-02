const { ncp } = require('ncp');
const fs = require('fs');
const fetch = require('node-fetch');
const { exec } = require('child_process');

ncp.limit = 16;
const source = 'https://github.com/google/material-design-icons/trunk/font';
const destination = 'public/iconfont';
const inputListOfIcons = 'https://raw.githubusercontent.com/google/material-design-icons/master/font/MaterialIcons-Regular.codepoints';
const outputListOfIcons = './src/__jscash__/icons-names-list.js';

cloneMaterialIcons()
  .then(generateListOfIcons)
  .then(writeFileWithListOfIcons)
  .catch(error => console.error(error));

function cloneMaterialIcons () {
  return new Promise(((resolve, reject) => {
    exec(`svn checkout ${source} ${destination}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      if (stderr) {
        reject(stdout);
        return;
      }
      resolve();
      console.log(source + ' > ' + destination);
    });
  }));
}

function generateListOfIcons () {
  return new Promise((resolve, reject) => {
    fetch(inputListOfIcons)
      .then(response => response.text())
      .then(data => {
        const linesToPrepare = data.split('\n');
        const lines = linesToPrepare
          .filter(line => line !== '')
          .map(line => {
            const iconName = line.split(' ')[0];
            return `  '${iconName}': '${iconName}',\n`;
          });
        let fileContent = 'export const ICONS = {\n';
        fileContent += Array.from(new Set(lines)).join('');
        fileContent += '};\n';

        resolve(fileContent);
      })
      .catch(reject);
  });
}

function writeFileWithListOfIcons (fileContent) {
  fs.writeFile(outputListOfIcons, fileContent, function (err) {
    if (err) return console.log(err);
    console.log(inputListOfIcons + ' > ' + outputListOfIcons);
  });
}



