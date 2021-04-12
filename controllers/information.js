const express = require('express');
const router = express.Router();
const pjson = require('../package.json');

/**
 * @swagger
 *
 * /information:
 *  get:
 *    summary: Get app/system information
 *    tags:
 *      - Information
 *    responses:
 *      200:
 *        description: Information about app/system
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                appVersion:
 *                  type: string
 */
router.route('/')
  .get((req, res) => {
    res.send({
      appVersion: pjson.version,
    });
  });

module.exports = router;
