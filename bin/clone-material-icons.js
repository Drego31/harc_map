const { ncp } = require('ncp');
const fs = require('fs');

ncp.limit = 16;
const source = './node_modules/material-design-icons/iconfont';
const destination = './public/iconfont';

function convertFile (data) {
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

  fs.writeFile(destination + '/list.js', fileContent, function (err) {
    if (err) return console.log(err);
    console.log(`Material Icon List > ${destination}/list.js`);
    console.log('Material design icons has been cloned!');
  });
}

ncp(source, destination, error => {
  if (error) {
    return console.error(error);
  }
  setTimeout(() => {
    const file = fs.readFileSync(destination + '/codepoints', 'utf8');
    convertFile(file)
  }, 100)
});


