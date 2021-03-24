const config = require('../../config/system.config.json');
const utils = require('../utils');
const appHostname = utils.envIsDevelopment() ? 'https://localhost:3030' : config.app.hostname;
const contactEmail = config.mail.email;

/**
 * @description Email template
 * @param type
 * @param key
 * @param mailTypes
 * @return {string}
 */
module.exports = (type, key, mailTypes) => {
  let title;
  let url;
  let urlText;

  if (type === mailTypes.resetPassword) {
    title = 'Kliknij w poniższy link, aby zresetować hasło';
    urlText = 'ZRESETUJ HASŁO';
    url = `${appHostname}/user/remind/${key}`;
  } else if (type === mailTypes.activation) {
    title = 'Kliknij w poniższy link, aby aktywować konto';
    urlText = 'AKTYWUJ KONTO';
    url = `${appHostname}/user/activation/${key}`;
  }

  return `<div>
    <h1>Czuwaj!</h1>
    <h3>${title}</h3>
    <p>${type === mailTypes.resetPassword ? '<small>Uwaga! Link będzie aktywny przez 24h!</small>' : ''}</p>
    <p>
        <a href="${url}">${urlText}</a>
    </p>
    <small>
        <div>Pozdrawiamy</div>
        <div>Ekipa HarcMap</div>
        <div>Site: https://harcmap.henouser.pl</div>
        <div>Email: ${contactEmail}</div>
    </small>
</div>
`;
};
