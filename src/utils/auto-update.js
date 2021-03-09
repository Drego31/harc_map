import moment from 'moment';
import { map } from 'map';

const oneSecond = 1000;
const intervalTime = 60 * oneSecond;
let intervalID = null;
let timeoutID = null;

export const autoUpdate = {
  run () {
    const secondsToFullMinute = 60 - Number(moment().format('s'));
    timeoutID = setTimeout(() => {
      autoUpdate.once();
      intervalID = setInterval(
        autoUpdate.once,
        intervalTime);
    }, secondsToFullMinute * oneSecond);
  },
  once () {
    map.updateMapFeatures()
      .catch(() => undefined);
  },
  stop () {
    clearTimeout(timeoutID);
    clearInterval(intervalID);
    timeoutID = null;
    intervalID = null;
  },
};
