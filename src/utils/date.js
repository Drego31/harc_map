export const modifyDateHours = (date, modifyValue) => {
  const modifiedDate = new Date(date);
  const modifiedDateHour = date.getHours() + modifyValue;
  return new Date(modifiedDate.setHours(modifiedDateHour));

};

export const getZeroPad = (n) => (parseInt(n, 10) >= 10 ? '' : '0') + n;

export const getMinutesAsString = (date) => `${getZeroPad(date.getMinutes())}`;

export const getSecondsAsString = (date) => `${getZeroPad(date.getSeconds())}`;

export const getFullDateAsString = (date) => `${date.getHours()}` + ':' + getMinutesAsString(date) + ':' + getSecondsAsString(date);

export const getHoursAndMinutesAsString = (date) => {
  return `${date.getHours()}` + ':' + getMinutesAsString(date);
};
