const { downloadSingleFile } = require('../lib/file-downloader');
const { generateListOfIcons, writeListOfIconsIntoFile } = require('../lib/icon-list-generator');

const iconSourceDir = 'https://raw.githubusercontent.com/google/material-design-icons/master/font/';
const filesInSource = [
  'MaterialIcons-Regular.codepoints',
  'MaterialIcons-Regular.ttf',
  'MaterialIconsOutlined-Regular.codepoints',
  'MaterialIconsOutlined-Regular.otf',
  'MaterialIconsRound-Regular.codepoints',
  'MaterialIconsRound-Regular.otf',
  'MaterialIconsSharp-Regular.codepoints',
  'MaterialIconsSharp-Regular.otf',
  'MaterialIconsTwoTone-Regular.codepoints',
  'MaterialIconsTwoTone-Regular.otf',
  'README.md',
];
const iconDestinationDir = 'public/iconfont/';

const iconListSource = 'https://raw.githubusercontent.com/google/material-design-icons/master/font/MaterialIcons-Regular.codepoints';
const iconListDestination = './src/__jscash__/icons-names-list.js';

function cloneMaterialIcons () {
  console.log('Cloning Material Icons...');
  const requests = [];

  for (const fileName of filesInSource) {
    requests.push(downloadSingleFile(iconSourceDir, iconDestinationDir, fileName));
  }
  return Promise.allSettled(requests);
}

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

cloneMaterialIcons()
  .then(createListOfIconsFile)
  .catch(console.error);



