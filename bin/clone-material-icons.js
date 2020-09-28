const { ncp } = require('ncp');
const fs = require('fs');

ncp.limit = 16;
const source = './node_modules/material-design-icons/iconfont';
const destination = './public/iconfont';
const inputListOfIcons = source + '/codepoints';
const outputListOfIcons = './src/__jscash__/icons-names-list.js';

cloneMaterialIcons()
  .then(generateListOfIcons)
  .then(writeFileWithListOfIcons);

function cloneMaterialIcons () {
  return new Promise(((resolve, reject) => {
    ncp(source, destination, error => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  }));
}

function generateListOfIcons () {
  const data = fs.readFileSync(inputListOfIcons, 'utf8');
  const linesToPrepare = data.split('\n');
  const lines = linesToPrepare
    .filter(line => line !== '')
    .map(line => {
      const iconName = line.split(' ')[0];
      return `  '${iconName}': '${iconName}',\n`;
    });
  let fileContent = 'export const ICONS = {\n';
  fileContent += lines.join('');
  fileContent += '};';

  return fileContent;
}

function writeFileWithListOfIcons (fileContent) {
  fs.writeFile(outputListOfIcons, fileContent, function (err) {
    if (err) return console.log(err);
    console.log(`Material Icon List > ${destination}/list.js`);
    console.log('Material design icons has been cloned!');
  });
}



