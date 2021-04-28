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
 *                error:
 *                  type: string
 *                  nullable: true
 *                warn:
 *                  type: string
 *                  nullable: true
 */
router.route('/')
  .get((req, res) => {
    res.send({
      appVersion: pjson.version,
      error: null,
      warn: null,
    });
  });

module.exports = router;
