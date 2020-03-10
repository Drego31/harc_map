/**
 * Module responsible for sending mails
 */
const mail = require('nodemailer');
const mailConfig = require('../config/system.config').mail;

const { host, port, email, password } = mailConfig;

/**
 * @description HTML for activation email
 * @param key {string}
 * @return {string} HTML
 * @private
 */
function __activationMailContent (key) {
  return `<div>
            <h1>Czuwaj! Kliknij w poniższy link, aby aktywować konto:</h1>
            <div>
                <a href="https://google.pl">key</a>
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
  return `<div>
            <h1>Czuwaj! Kliknij w poniższy link, aby zresetować hasło:</h1>
            <div>
                <a href="https://google.pl">key</a>
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
 * @param user {string}
 * @param key {string}
 * @return {Promise<unknown>}
 */
function accountActivation (user, key) {
  return __sendMail(user, 'Account activation', __activationMailContent(key));
}

/**
 * @description Send reset password mail
 * @param user {string}
 * @param key {string}
 * @return {Promise<unknown>}
 */
function resetPassword (user, key) {
  return __sendMail(user, 'Reset password', __resetPasswordContent(key));
}

module.exports = {
  accountActivation,
  resetPassword,
};
