const { parse } = require('json2csv');
const express = require('express');
const router = express.Router();
const database = require('../../lib/mongodb');

// Codes for errorsCodes
const errorsCodes = require('../../lib/validateCodes');

/**
 * @swagger
 *
 * /point/all:
 *  get:
 *    summary: Get list of actual admin user points. REQUIRE admin permissions
 *    tags:
 *      - Point
 *    responses:
 *      200:
 *        description: List of all points of actual eventId
 *      400:
 *        description: Error with get data from db
 */
router.route('/')
  .get((req, res) => {
    const activeEvent = req.user.userEvents[0];

    database.readMany(`point_categories_${activeEvent}`, {})
      .then(categories => {
        database.readMany(`event_${activeEvent}`, {})
          .then(points => {
            return points.map(point => {
              const {
                pointId,
                pointLatitude,
                pointLongitude,
                pointType,
                pointCategory,
              } = point;

              const pointCategoryObject = categories.find(category => category.categoryId === pointCategory);

              return {
                pointId,
                pointLatitude,
                pointLongitude,
                pointType,
                pointValue: pointCategoryObject.pointValue,
              };
            });
          })
          .then(preparedPoints => parse(preparedPoints))
          .then(parsedPoints => {
            const bufferData = Buffer.from(parsedPoints);

            res.set({
              'Content-Length': bufferData.toString().length,
              'Content-Type': 'text/plain',
              'Content-Disposition': `attachment; filename="points_of_${activeEvent}.csv"`,
            });
            res.send(bufferData);
          })
          .catch(error => {
            console.error(error);

            res.status(400).send({
              error: errorsCodes.DATABASE_DATA_ERROR,
              warn: null,
            });
          });
      })
      .catch(error => {
        console.error(error);
      });
  });

module.exports = router;
