import { makeRequest, request } from 'utils/request';
import { AppEvent } from 'src/structures/app-event';
import { ERRORS } from 'utils/macros/errors';
import { MapPoint } from 'src/structures/map-point';
import validateCodes from 'src/../lib/validateCodes';

export const eventController = {
  getEventById ({ eventId }) {
    return makeRequest({
      method: request.get,
      url: '/event',
      data: { eventId },
      transformResponseData: data => new AppEvent(data),
      defaultError: ERRORS.getEventById,
    });
  },
  getPointsByEventId ({ eventId }) {
    return makeRequest({
      method: request.get,
      url: '/event/points',
      data: { eventId },
      transformResponseData: data => {
        return data.points.map(point => new MapPoint(point));
      },
      defaultError: ERRORS.getPoints,
    });
  },
  getCategoriesByEventId ({ eventId }) {
    return makeRequest({
      method: request.get,
      url: '/event/point/categories',
      data: { eventId },
      transformResponseData: data => data.categories,
      defaultError: ERRORS.getCategories,
    });
  },
  collectPoint ({ user, eventId, pointId }) {
    return makeRequest({
      method: request.put,
      url: '/event/point/collect',
      data: {
        user,
        eventId,
        pointId,
      },
      defaultError: ERRORS.collectPoint,
      errors: [
        [validateCodes.DATABASE_DATA_CONFLICT_ERROR, ERRORS.pointIsCollected],
        [validateCodes.DATABASE_NO_RESULT_ERROR, ERRORS.pointNotExists],
      ],
    });
  },
};
