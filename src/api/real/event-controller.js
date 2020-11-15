import { request } from 'utils/request';
import { AppEvent } from 'src/structures/app-event';
import { ErrorMessage } from 'utils/error-message';
import { ERRORS } from 'utils/macros/errors';
import { MapPoint } from 'src/structures/map-point';
import { hasNoError, catchConnectionError } from 'api/real/real';
import validateCodes from 'src/../lib/validateCodes';

export const eventController = {
  getEventById (eventId) {
    return new Promise((resolve, reject) => {
      request.get({
        url: '/event',
        data: { eventId },
      })
        .then(response => response.json())
        .then(data => {
          if (hasNoError(data)) {
            resolve(new AppEvent(data));
          } else {
            reject(new ErrorMessage(ERRORS.getEventById));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  getPointsByEventId ({ eventId }) {
    return new Promise((resolve, reject) => {
      request.get({
        url: '/event/points',
        data: { eventId },
      })
        .then(response => response.json())
        .then(data => {
          if (hasNoError(data)) {
            resolve(data.points.map(point => new MapPoint(point)));
          } else {
            reject(new ErrorMessage(ERRORS.getEventById));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  getCategoriesByEventId ({ eventId }) {
    return new Promise((resolve, reject) => {
      request.get({
        url: '/event/point/categories',
        data: { eventId },
      })
        .then(response => response.json())
        .then(data => {
          if (hasNoError(data)) {
            resolve(data.categories);
          } else {
            reject(new ErrorMessage(ERRORS.getEventById));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
  collectPoint ({ user, eventId, pointId }) {
    return new Promise((resolve, reject) => {
      request.put({
        url: '/event/point/collect',
        data: {
          user,
          eventId,
          pointId,
        },
      })
        .then(response => response.json())
        .then(data => {
          if (hasNoError(data)) {
            resolve();
          } else {
            if (data.error === validateCodes.DATABASE_DATA_CONFLICT_ERROR) {
              reject(new ErrorMessage(ERRORS.pointIsCollected));
            } else {
              reject(new ErrorMessage(ERRORS.collectPoint));
            }
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
};
