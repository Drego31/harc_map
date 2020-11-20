import { request } from 'utils/request';
import { AppEvent } from 'src/structures/app-event';
import { ERRORS } from 'utils/macros/errors';
import { MapPoint } from 'src/structures/map-point';
import validateCodes from 'src/../lib/validateCodes';
import { apiResponseService } from 'utils/api-response-service';

export const eventController = {
  getEventById (eventId) {
    return new Promise((resolve, reject) => {
      request.get({
        url: '/event',
        data: { eventId },
      })
        .then(response => apiResponseService.takeOverResponse({
          response,
          onSuccess: data => resolve(new AppEvent(data)),
          onError: reject,
          defaultError: ERRORS.getEventById,
        }))
        .catch(apiResponseService.catchConnectionError(reject));
    });
  },
  getPointsByEventId ({ eventId }) {
    return new Promise((resolve, reject) => {
      request.get({
        url: '/event/points',
        data: { eventId },
      })
        .then(response => apiResponseService.takeOverResponse({
          response,
          onSuccess: data => resolve(data.points.map(point => new MapPoint(point))),
          onError: reject,
          defaultError: ERRORS.getPoints,
        }))
        .catch(apiResponseService.catchConnectionError(reject));
    });
  },
  getCategoriesByEventId ({ eventId }) {
    return new Promise((resolve, reject) => {
      request.get({
        url: '/event/point/categories',
        data: { eventId },
      })
        .then(response => apiResponseService.takeOverResponse({
          response,
          onSuccess: data => resolve(data.categories),
          onError: reject,
          defaultError: ERRORS.getCategories,
        }))
        .catch(apiResponseService.catchConnectionError(reject));
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
        .then(response => apiResponseService.takeOverResponse({
          response,
          onSuccess: resolve,
          onError: reject,
          defaultError: ERRORS.collectPoint,
          errors: [
            [validateCodes.DATABASE_DATA_CONFLICT_ERROR, ERRORS.pointIsCollected],
            [validateCodes.DATABASE_NO_RESULT_ERROR, ERRORS.pointNotExists],
          ],
        }))
        .catch(apiResponseService.catchConnectionError(reject));
    });
  },
};
