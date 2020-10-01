const fs = require('fs');
const fetch = require('node-fetch');

function generateListOfIcons (inputListOfIcons) {
  return new Promise((resolve, reject) => {
    fetch(inputListOfIcons)
      .then(response => response.text())
      .then(data => {
        resolve(convertCodepointsToJSList(data));
      })
      .catch(reject);
  });
}

function convertCodepointsToJSList (codepoints) {
  const linesToPrepare = codepoints.split('\n');
  const lines = linesToPrepare
    .filter(line => line !== '')
    .map(line => {
      const iconName = line.split(' ')[0];
      return `  '${iconName}': '${iconName}',\n`;
    });

  const removeDuplicates = list => {
    return Array.from(new Set(list))
  }

  let fileContent = 'export const ICONS = {\n';
  fileContent += removeDuplicates(lines).join('');
  fileContent += '};\n';
  return fileContent
}

function writeListOfIconsIntoFile (iconListDestination, list) {
  return new Promise((resolve, reject) => {
    fs.writeFile(iconListDestination, list, error => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

module.exports = {
  generateListOfIcons,
  writeListOfIconsIntoFile,
};
