const { generateListOfIcons, writeListOfIconsIntoFile } = require('../lib/icon-list-generator');

const iconListSource = 'https://fonts.google.com/metadata/icons';
const iconListDestination = './src/__jscash__/icons-names-list.js';

function createListOfIconsFile () {
  console.log('\nDownloading list of icons...');
  return generateListOfIcons(iconListSource)
    .then(list => writeListOfIconsIntoFile(iconListDestination, list))
    .then(() => {
      const splitSourcePath = iconListSource.split('/');
      const fileName = splitSourcePath[splitSourcePath.length - 1];
      console.log(fileName + ' ~> ' + iconListDestination);
    });
}

createListOfIconsFile()
  .catch(console.error);
