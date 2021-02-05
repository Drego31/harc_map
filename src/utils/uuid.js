import Cookies from 'js-cookie';

/**
 * @description
 * Sets "uuid"
 */
function setUUID () {
  const uuidCookieName = 'hm.u.u.i.d';
  const uuidValue = Cookies.get(uuidCookieName);
  if (!uuidValue) {
    // "uuid" value
    const newRandomValue = Math.round(Math.random() * 10e5) + '_' + Date.now();
    // expires after 9999 days
    Cookies.set(uuidCookieName, newRandomValue, { expires: 9999 });
  }
}

export default setUUID;
