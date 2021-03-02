const express = require('express');
const router = express.Router();
const database = require('../../lib/mongodb');
const utils = require('../../lib/utils');

// Codes for errorsCodes
const errorsCodes = require('../../lib/validateCodes');

/**
 * @swagger
 *
 * /user/all:
 *  get:
 *    summary: Get list of admin events users. REQUIRE admin permissions
 *    tags:
 *      - User
 *    responses:
 *      200:
 *        description: List of all users that participle in same event as admin
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  user:
 *                    $ref: '#/components/responses/200/User'
 *                  userTeam:
 *                    $ref: '#/components/responses/200/UserTeam'
 *                  accountIsActive:
 *                    type: boolean
 *                  accountCreated:
 *                    type: number
 *                  collectedPointsIds:
 *                    $ref: '#/components/responses/200/CollectedPointsIds'
 *      400:
 *        description: Error with get data from db
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
  .get((req, res) => {
    const onlyAdminEventsUsersQuery = { userEvents: { $in: req.user.userEvents } };

    database.readMany('users', onlyAdminEventsUsersQuery)
      .then(results => {
        const filteredUsersList = results.map(userObject => ({
          user: userObject.user,
          userTeam: userObject.userTeam,
          accountIsActive: userObject.accountIsActive,
          accountCreated: userObject.accountCreated,
          collectedPointsIds: userObject.collectedPointsIds,
        }));
        res.send(filteredUsersList);
      })
      .catch(errorCode => {
        utils.responseUserError(res, 400, errorsCodes.DATABASE_DATA_ERROR);
      });
  });

module.exports = router;
