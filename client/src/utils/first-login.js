import Cookies from 'js-cookie';
import { uCheck } from '@dbetka/utils';

const cookieName = 'firstLogin';
const cookieExpiresInDays = 365;

export const firstLogin = {
  get state () {
    const cookie = Cookies.getJSON(cookieName);
    return uCheck.isDefined(cookie) ? cookie : true;
  },
  setCookie () {
    Cookies.remove(cookieName);
    Cookies.set(cookieName, false, { expires: cookieExpiresInDays });
  },
};
