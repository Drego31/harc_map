/**
 * Module for logs
 */
// App icon
const appIcon = '\u{1F680}';
// Is development mode
let devel = false;

// Add icon or indent for logs
function __prefix (withIcon) {
  return `${withIcon ? appIcon : '  '} `;
}

/**
 * @description Initialization for logs
 * @param isDevelEnv {boolean}
 */
function init (isDevelEnv) {
  devel = isDevelEnv;
  console.log(`${__prefix(true)}App run in \x1b[1m${devel ? 'DEVELOPMENT' : 'PRODUCTION'}\x1b[0m mode\n`);
}

/**
 * @description Log for not exist config
 * @param configPath {string}
 */
function configError (configPath) {
  console.log(`${__prefix()}\x1b[31mCannot find config file or structure is invalid!`);
  console.log(`${__prefix()}FILE: \x1b[1m${configPath}\x1b[0m`);
}

module.exports = {
  init,
  configError,
};
