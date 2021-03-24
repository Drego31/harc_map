/**
 * Module responsible for sending mails
 */
const mail = require('nodemailer');
const config = require('../../config/system.config.json');
const errorsCodes = require('../validateCodes');
const mailHtmlContent = require('./mailHtmlContent');

const { host, port, email, password } = config.mail;

const mailTypes = {
  activation: 'activation',
  resetPassword: 'reset_password',
};

/**
 * @description Send email to another
 * @param to {string} - email of destiny address
 * @param type {string} - email type
 * @param key {string} - unique user key
 * @return {Promise<unknown>}
 */
function __sendMail (to, type = mailTypes.activation, key) {
  let subject;

  if (type === mailTypes.resetPassword) {
    subject = 'Zresetuj hasło na HarcMapie';
  } else if (type === mailTypes.activation) {
    subject = 'Aktywuj konto na HarcMapie';
  }

  return new Promise((resolve, reject) => {
    // server configuration
    const mailMessage = mail.createTransport({
      host,
      port,
      secure: true,
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
      html: mailHtmlContent(type, key, mailTypes),
    }, (error) => {
      // error in sending
      if (error) {
        console.error(error);
        reject(errorsCodes.MAIL_UNKNOWN_ERROR);
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
  return __sendMail(email, mailTypes.activation, key);
}

/**
 * @description Send reset password mail
 * @param email {string}
 * @param key {string}
 * @return {Promise<unknown>}
 */
function resetPassword (email, key) {
  return __sendMail(email, mailTypes.resetPassword, key);
}

module.exports = {
  accountActivation,
  resetPassword,
};
