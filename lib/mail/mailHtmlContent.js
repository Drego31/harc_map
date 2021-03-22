const config = require('../../config/system.config.json');
const utils = require('../utils');
const appHostname = utils.envIsDevelopment() ? 'https://localhost:3030' : config.app.hostname;

/**
 * @description Email template
 * @param type
 * @param key
 * @return {string}
 */
module.exports = (type, key) => {
  let title;
  let url;

  if (type === 'reset_password') {
    title = 'Kliknij w poniższy link, aby zresetować hasło';
    url = `${appHostname}/user/remind/${key}`;
  } else if (type === 'activation') {
    title = 'Kliknij w poniższy link, aby aktywować konto';
    url = `${appHostname}/user/activation/${key}`;
  }

  const html = `
<div>
    <h1>Czuwaj!</h1>
    <h3>${title}</h3>
    ${type === 'reset_password' ? <p>Uwaga! Link będzie aktywny przez 24h!</p> : null}
    <div>
        <a href="${url}">${url}</a>
    </div>
    <hr>
    <small>
        <p>Pozdrawiamy</p>
        <p>Ekipa HarcMap</p>
    </small>
</div>
`;

  return html.trim();
};
