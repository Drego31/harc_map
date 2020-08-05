import { getEventByIdMock } from 'api/mock/mockMethods/get-event-by-id';
import { makeDelayFakeAnswer } from 'api/mock/mock';
import { ErrorMessage } from 'utils/error-message';
import { ERRORS } from 'utils/macros/errors';
import { getPointsByEventIdMock } from 'api/mock/mockMethods/get-points';

export const eventController = {
  getEventById (eventId) {
    if (eventId) {
      return makeDelayFakeAnswer(getEventByIdMock(eventId));
    } else {
      return Promise.reject(new ErrorMessage(ERRORS.eventIdIsRequired));
    }
  },
  getPointsByEventId ({ eventId }) {
    if (eventId) {
      return makeDelayFakeAnswer(getPointsByEventIdMock(eventId));
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
      pointCollectionTime: 1596649311754,
    }));
  },
};
