import { mockApi } from 'api/mock';
// import { realApi } from 'api/real'

export const api = {
  ...mockApi,
  // ...realApi,
};

window.api = api;
