import { getEventByIdMock } from 'api/mock/mockMethods/get-event-by-id';
import { makeDelayFakeAnswer } from 'api/mock/mock';
import { ErrorMessage } from 'utils/error-message';
import { ERRORS } from 'utils/macros/errors';

export const eventController = {
  getEventById (eventId) {
    if (eventId) {
      return makeDelayFakeAnswer(getEventByIdMock);
    } else {
      return Promise.reject(new ErrorMessage(ERRORS.eventIdIsRequired));
    }
  },
  getPointsByEventId ({ eventId }) {
    // 10 points
    return makeDelayFakeAnswer();
  },
  getCategoriesByEventId ({ eventId }) {
    return makeDelayFakeAnswer();
  },
  collectPoint ({ user, eventId, pointId }) {
    return makeDelayFakeAnswer();
  },
};
