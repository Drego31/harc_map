const express = require('express');
const router = express.Router();
const validator = require('../../lib/validator');
const database = require('../../lib/mongodb');
const utils = require('../../lib/utils');
const mail = require('../../lib/mail/mail');
const systemConfig = require('../../config/system.config.json');
const path = require('path');

// Codes for errorsCodes
const errorsCodes = require('../../lib/validateCodes');

/**
 * @description User have some time for change password until link to change will be blocked.
 * Here we check this
 * @param forgotTimestamp {number} - timestamp of request for change password
 * @return {boolean/Error} - result of check from desription
 * @private
 */
function __checkForgotTimeout (forgotTimestamp) {
  // convert config value of timeout to ms
  const passwordForgotTimeout = systemConfig.app.passwordForgotTimeoutInMinutes * 60 * 1000;
  if (forgotTimestamp && forgotTimestamp >= Date.now() - passwordForgotTimeout) {
    return true;
  } else {
    throw errorsCodes.FORGOT_TIMESTAMP_HAS_ENDED;
  }
}

/**
 * @swagger
 *
 * /user/remind:
 *  post:
 *    summary: User remind password
 *    description: Request for reset user password
 *    tags:
 *      - User
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              user:
 *                $ref: '#/components/properties/User'
 *          examples:
 *            Registration:
 *              value: { user: example@harcmap.pl }
 *      required: true
 *    responses:
 *      200:
 *        description: A username to be returned or error (MOVE ERRORS INFO TO 4** and 5** CODES)
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user:
 *                  $ref: '#/components/responses/200/User'
 *                error:
 *                  $ref: '#/components/responses/200/Error'
 *      400:
 *        description: Errors about validation
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user:
 *                  $ref: '#/components/responses/400/User'
 *                error:
 *                  $ref: '#/components/responses/400/Error'
 *      401:
 *        description: Inactive account
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user:
 *                  $ref: '#/components/responses/400/User'
 *                error:
 *                  $ref: '#/components/responses/400/Error'
 */
router.route('/')
  .post((req, res) => {
    // User data validation
    const requestBodyValidationError = validator.validate(
      validator.methods.validateUserRemindPostRequest, req.body,
    );

    if (!requestBodyValidationError) {
      const forgotData = {
        forgotKey: utils.generateAccessKey(),
        forgotTimestamp: Date.now(),
      };

      // Data from client
      const { user } = req.body;
      database.read('users', { user })
        .then(utils.throwIfEmpty)
        .then(result => {
          if (result.accountIsActive) {
            return result;
          } else {
            utils.responseUserError(res, 401, errorsCodes.ACCOUNT_IS_INACTIVE);
          }
        })
        // update user object with forgot key and timeout
        .then(() => database.update('users', { user }, forgotData))
        // unknow error of mail module
        .then(result => utils.throwIfEmpty(result, errorsCodes.MAIL_UNKNOWN_ERROR))
        // send mail
        .then(() => mail.resetPassword(user, forgotData.forgotKey))
        .then(() => {
          // successful sent
          res.send({
            user,
            error: null,
            warn: null,
          });
        })
        .catch(errorCode => {
          utils.responseUserError(res, 200, errorCode, errorCode);
        });
    } else {
      utils.responseUserError(res, 400, errorsCodes.JSON_INCORRECT, requestBodyValidationError);
    }
  });

/**
 * @swagger
 *
 * /user/remind/{key}:
 *  get:
 *    summary: Request for change password
 *    description: Using by user to go to change password form. Link received via email
 *    tags:
 *      - User
 *    parameters:
 *      - name: key
 *        description: Unique key assigned to inactive account
 *        in: query
 *        required: true
 *    responses:
 *      200:
 *        description: Return index.html
 *        content:
 *          text/html:
 *            schema:
 *              type: string
 *      302:
 *        description: Redirection to error page(/404)
 */
router.route('/:key')
  .head((req, res) => {
    res.send('ok');
  })
  .get((req, res) => {
    // Data from client
    const { key } = req.params;
    // search for key
    database.read('users', { forgotKey: key })
      .then(utils.throwIfEmpty)
      // check if forgotTimeout hasn't ended
      .then(userWithKey => __checkForgotTimeout(userWithKey.forgotTimestamp))
      .then(() => res.sendFile(path.resolve(__dirname, '../../public/index.html')))
      .catch(errorMsg => {
        if (errorMsg) console.trace(errorMsg);
        res.redirect(302, '/404');
      });
  })
  /**
   * @swagger
   *
   * /user/remind/{key}:
   *  put:
   *    summary: Change password in database
   *    description: Using by user to change password in database
   *    tags:
   *      - User
   *    parameters:
   *      - name: key
   *        description: Unique key assigned to inactive account
   *        in: query
   *        required: true
   *    requestBody:
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              password:
   *                $ref: '#/components/properties/Password'
   *          examples:
   *            Registration:
   *              value: { password: ExamplePassword1! }
   *      required: true
   *    responses:
   *      200:
   *        description: Return when successfully change password. TO CHANGE - received too when DB crush
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                user:
   *                  $ref: '#/components/responses/200/User'
   *                error:
   *                  $ref: '#/components/responses/200/Error'
   *      400:
   *        description: Errors
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                user:
   *                  $ref: '#/components/responses/400/User'
   *                error:
   *                  $ref: '#/components/responses/400/Error'
   *      404:
   *        description: Return when time to change password pass
   */
  .put((req, res) => {
    // User data validation
    const requestBodyValidationError = validator.validate(
      validator.methods.validateUserRemindPutRequest, req.body,
    );
    if (!requestBodyValidationError) {
      // Data from client
      const { password } = req.body;
      const { key } = req.params;

      database.read('users', { forgotKey: key })
        .then(result => utils.throwIfEmpty(result, errorsCodes.INVALID_URL_KEY))
        // forgotTimeout has ended
        .then(result => {
          if (__checkForgotTimeout(result.forgotTimestamp)) {
            return result;
          } else {
            res.status(404).send();
          }
        })
        // change password to new
        .then(userData => {
          const updateData = {
            password: utils.getSHA(password),
            forgotKey: null,
            forgotTimestamp: null,
          };
          return database.update('users', { _id: database.ObjectId(userData._id) }, updateData);
        })
        .then(() => {
          res.send({
            user: null,
            error: null,
            warn: null,
          });
        })
        .catch(errorCode => {
          utils.responseUserError(res, 200, errorCode, errorCode);
        });
    } else {
      utils.responseUserError(res, 400, errorsCodes.JSON_INCORRECT);
    }
  });

module.exports = router;
