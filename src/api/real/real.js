import { ErrorMessage } from 'utils/error-message';
import { logical } from 'vendors/logical';
import { userController } from 'api/real/user-controller';
import { eventController } from 'api/real/event-controller';

export function catchConnectionError (reject) {
  return function (fetchError) {
    reject(new ErrorMessage(fetchError));
  };
}
export function hasNoError (data) {
  return logical.isNull(data.error);
}

export const realApi = {
  ...userController,
  ...eventController,
};
