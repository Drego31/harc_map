/**
 * Module responsible for sending mails
 */
const mail = require('nodemailer');
const utils = require('./utils');
const config = require('../config/system.config');

const { host, port, email, password } = config.mail;
const appHostname = utils.envIsDevelopment() ? 'https://localhost:3030' : config.app.hostname;

/**
 * @description HTML for activation email
 * @param key {string}
 * @return {string} HTML
 * @private
 */
function __activationMailContent (key) {
  const url = `${appHostname}/user/activation/${key}`;
  return `<div>
            <h1>Czuwaj! Kliknij w poniższy link, aby aktywować konto:</h1>
            <div>
                <a href="${url}">${url}</a>
            </div>
        </div>`;
}

/**
 * @description HTML for reset password email
 * @param key {string}
 * @return {string} HTML
 * @private
 */
function __resetPasswordContent (key) {
  const url = `${appHostname}/user/remind/${key}`;
  return `<div>
            <h1>Czuwaj! Kliknij w poniższy link, aby zresetować hasło:</h1>
            <div>
                <a href="${url}">${url}</a>
            </div>
        </div>`;
}

/**
 * @description Send email to another
 * @param to {string} - email of destiny address
 * @param subject {string}
 * @param content {string}
 * @return {Promise<unknown>}
 */
function __sendMail (to, subject, content) {
  return new Promise((resolve, reject) => {
    // server configuration
    const mailMessage = mail.createTransport({
      host,
      port,
      secure: false,
      auth: {
        user: email,
        pass: password,
      },
    });
    // sending message
    mailMessage.sendMail({
      from: `HarcMap ${email}`,
      to: to,
      subject: subject,
      html: content,
    }, (error) => {
      // error in sending
      if (error) {
        reject(error);
      } else {
        // successful sent
        resolve();
      }
    });
  });
}

/**
 * @description Send activation mail
 * @param email {string}
 * @param key {string}
 * @return {Promise<unknown>}
 */
function accountActivation (email, key) {
  return __sendMail(email, 'Account activation', __activationMailContent(key));
}

/**
 * @description Send reset password mail
 * @param email {string}
 * @param key {string}
 * @return {Promise<unknown>}
 */
function resetPassword (email, key) {
  return __sendMail(email, 'Reset password', __resetPasswordContent(key));
}

module.exports = {
  accountActivation,
  resetPassword,
};
