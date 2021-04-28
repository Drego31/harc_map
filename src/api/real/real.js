import { userController } from 'api/real/user-controller';
import { eventController } from 'api/real/event-controller';
import { makeRequest, request } from 'utils/request';
import { API_ERRORS } from 'utils/macros/errors';

export const realApi = {
  ...userController,
  ...eventController,
  information () {
    return makeRequest({
      method: request.get,
      url: '/information',
      ...API_ERRORS.information,
    });
  },
};
