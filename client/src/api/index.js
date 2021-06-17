import { mockApi } from 'api/mock/mock';
import { realApi } from 'api/real/real';

export const api = {
  ...mockApi,
  ...realApi,
};

if (PRODUCTION === false) {
  window.api = api;
}
