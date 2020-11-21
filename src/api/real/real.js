import { userController } from 'api/real/user-controller';
import { eventController } from 'api/real/event-controller';

export const realApi = {
  ...userController,
  ...eventController,
};
