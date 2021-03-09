import { getEventByIdMock } from 'api/mock/mockMethods/get-event-by-id';
import { makeDelayFakeAnswer } from 'api/mock/mock';
import { ErrorMessage } from 'utils/error-message';
import { ERRORS } from 'utils/macros/errors';
import { getPointsByEventIdMock } from 'api/mock/mockMethods/get-points';
import { MapPoint } from 'src/structures/map-point';

export const eventController = {
  getEventById ({ eventId }) {
    if (eventId) {
      return makeDelayFakeAnswer(() => getEventByIdMock(eventId));
    } else {
      return Promise.reject(new ErrorMessage(ERRORS.eventIdIsRequired));
    }
  },
  getPointsByEventId ({ eventId }) {
    if (eventId) {
      return makeDelayFakeAnswer(() => getPointsByEventIdMock(eventId).points.map(point => new MapPoint(point)));
    } else {
      return Promise.reject(new ErrorMessage(ERRORS.eventIdIsRequired));
    }
  },
  getCategoriesByEventId ({ eventId }) {
    return makeDelayFakeAnswer();
  },
  collectPoint ({ user, eventId, pointId }) {
    return makeDelayFakeAnswer(() => ({
      error: null,
      user: user,
      pointCollectionTime: 1596649311754, // Wed Aug 05 2020 19:41:51 GMT+0200 (Central European Summer Time)
    }));
  },
  removePoint ({ eventId, pointId }) {
    return makeDelayFakeAnswer(() => ({
      error: null,
    }));
  },
};
