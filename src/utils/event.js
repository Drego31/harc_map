import moment from 'moment';

export const eventUtils = {
  checkIfIsBeforeStart ({ eventStartDate }) {
    return eventStartDate > Date.now();
  },
  checkIfIsAfterStart ({ eventStartDate }) {
    return eventStartDate < Date.now();
  },
  checkIfIsOnGoing ({ eventStartDate, eventEndDate }) {
    return eventStartDate < Date.now() && Date.now() < eventEndDate;
  },
  checkIfIsOutOfDate ({ eventEndDate }) {
    return eventEndDate < Date.now();
  },
  checkIfEndDateIsToday ({ eventEndDate }) {
    const eventEndDateMoment = moment(new Date(eventEndDate));
    return eventEndDateMoment.diff(moment(), 'days') === 0;
  },
};
