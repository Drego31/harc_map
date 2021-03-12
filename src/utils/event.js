import { store } from 'store';

export const eventUtils = {
  checkIfIsBeforeStart ({ eventStartDate = store.getters['event/eventStartDate'] }) {
    return eventStartDate > Date.now();
  },
  checkIfIsAfterStart ({ eventStartDate = store.getters['event/eventStartDate'] }) {
    return eventStartDate < Date.now();
  },
  checkIfIsOnGoing ({
    eventStartDate = store.getters['event/eventStartDate'],
    eventEndDate = store.getters['event/eventEndDate'],
  }) {
    return eventStartDate < Date.now() && Date.now() < eventEndDate;
  },
  checkIfIsOutOfDate ({ eventEndDate = store.getters['event/eventEndDate'] }) {
    return eventEndDate < Date.now();
  },
};
