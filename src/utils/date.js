export const getZeroPad = (n) => (parseInt(n, 10) >= 10 ? '' : '0') + n;

export const getMinutesAsString = (date) => `${getZeroPad(date.getMinutes())}`;

export const getSecondsAsString = (date) => `${getZeroPad(date.getSeconds())}`;

export const getFullDateAsString = (date) => `${date.getHours()}` + ':' + getMinutesAsString(date) + ':' + getSecondsAsString(date);

export const getHoursAndMinutesAsString = (date) => `${date.getHours()}` + ':' + getMinutesAsString(date);
