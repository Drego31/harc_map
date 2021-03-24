const express = require('express');
const router = express.Router();
const validator = require('../../lib/validator');
const database = require('../../lib/mongodb');
const utils = require('../../lib/utils');
const mail = require('../../lib/mail/mail');

// Codes for errorsCodes
const errorsCodes = require('../../lib/validateCodes');

/**
 * @description Create user object that will be insert to database
 * @param information {object} - information gave by user
 * @return {{password: string, accountCreated: number, userTeam: *, forgotTimestamp: null, accountType: string, accountIsActive: boolean, userEvents: [*], activationKey: string, user: *, forgotKey: null, collectedPointsIds: []}}
 * @private
 */
function __createNewUserObject (information) {
  const { user, userTeam, password, userEvent } = information;

  return {
    user,
    userTeam,
    password: utils.getSHA(password),
    userEvents: [userEvent],
    accountType: 'common',
    accountIsActive: false,
    limitedPermissions: false,
    activationKey: utils.generateAccessKey(),
    forgotKey: null,
    forgotTimestamp: null,
    accountCreated: Date.now(),
    collectedPointsIds: [],
    loginHistory: {
      loginCount: null,
      lastLoginTime: null,
      lastLoginUUID: null,
    },
  };
}

/**
 * @swagger
 *
 * /user:
 *  post:
 *    summary: User registration
 *    description: User registration (Request for mail with activation link)
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
 *              password:
 *                $ref: '#/components/properties/Password'
 *              userTeam:
 *                $ref: '#/components/properties/UserTeam'
 *              eventId:
 *                $ref: '#/components/properties/EventId'
 *          examples:
 *            Registration:
 *              value: { user: example@harcmap.pl, password: Abcd1234, userTeam: FonzieBoys, eventId: Ab12 }
 *      required: true
 *    responses:
 *      200:
 *        description: A username to be returned or error information about validation (MOVE ERRORS INFO TO 4** and 5** CODES)
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user:
 *                   $ref: '#/components/responses/200/User'
 *                error:
 *                   $ref: '#/components/responses/200/Error'
 *      400:
 *        description: Errors about invalid eventId, userTeam or another validation
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user:
 *                  $ref: '#/components/responses/400/Error'
 *                error:
 *                  $ref: '#/components/responses/400/Error'
 */
router.route('/')
  .post((req, res) => {
    // User data validation
    const requestBodyValidationError = validator.validate(
      validator.methods.validateUserRegistrationPostRequest, req.body,
    );

    if (!requestBodyValidationError) {
      // Data from client
      const { user, password, userTeam, eventId } = req.body;

      // user doesn't exist, we can create new
      const newUserData = __createNewUserObject({
        user,
        password,
        userTeam,
        userEvent: eventId,
      });

      // check if eventId is correct(exist)
      database.read('events', { eventId })
        // event exist - user can be creat
        .then(result => utils.throwIfEmpty(result, errorsCodes.EVENT_ID_NOT_EXIST))
        // check if user and userTeam doesn't already exist
        .then(() => database.read('users', { $or: [{ user }, { userTeam }] }))
        .then(result => utils.throwIf(result, result !== null, errorsCodes.USER_EXIST))
        // create user
        .then(() => database.create('users', [newUserData]))
        .then(utils.throwIfEmpty)
        // send activation mail
        .then(() => mail.accountActivation(user, newUserData.activationKey))
        .then(() => {
          // User created
          res.send({
            user,
            error: null,
            warn: null,
          });
        })
        .catch(errorCode => {
          if ([errorsCodes.USER_EXIST, errorsCodes.EVENT_ID_NOT_EXIST].includes(errorCode)) {
            utils.responseUserError(res, 400, errorCode);
          } else {
            utils.responseUserError(res, 200, errorCode, errorCode);
          }
        });
    } else {
      utils.responseUserError(res, 400, requestBodyValidationError);
    }
  });

module.exports = router;
