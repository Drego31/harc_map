const express = require('express');
const router = express.Router();
const database = require('../../lib/mongodb');
const utils = require('../../lib/utils');

// Codes for errorsCodes
const errorsCodes = require('../../lib/validateCodes');

/**
 * @swagger
 *
 * /user/activation/{key}:
 *  get:
 *    summary: User activation account
 *    description: Using by user to activate account. Link received in email
 *    tags:
 *      - User
 *    parameters:
 *      - name: key
 *        description: Unique key assigned to inactive account
 *        in: query
 *        required: true
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
 *      302:
 *        description: Redirection to activation-done page(/activation-done) or error page(/activation-wrong)
 */
router.route('/:key')
  .head((req, res) => {
    res.send('ok');
  })
  .get((req, res) => {
    const activationUpdateData = {
      accountIsActive: true,
      activationKey: null,
    };

    // Data from client
    const { key } = req.params;
    database.read('users', { activationKey: key })
      .then(utils.throwIfEmpty)
      // check if account isn't active
      .then(result => utils.throwIf(result, result.accountIsActive, errorsCodes.DATABASE_NO_RESULT_ERROR))
      // update account to active
      .then(result => database.update('users', { _id: database.ObjectId(result._id) }, activationUpdateData))
      // successful updated
      .then(utils.throwIfEmpty)
      .then(() => {
        res.redirect(302, '/activation-done');
      })
      .catch(errorCode => {
        if (errorCode === errorsCodes.DATABASE_NO_RESULT_ERROR) {
          res.redirect(302, '/activation-wrong');
        } else {
          utils.responseUserError(res, 200, errorCode, errorCode);
        }
      });
  });

module.exports = router;
