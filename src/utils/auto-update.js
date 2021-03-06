import { store } from 'store';
import { map } from 'map';
import { uCheck } from '@dbetka/utils';
import moment from 'moment';

const oneSecond = 1000;
const intervalTime = 60 * oneSecond;
let intervalID = null;
let timeoutID = null;

function intervalMethod () {
  store.dispatch('event/download')
    .then(() => {
      if (uCheck.isObject(map.realMap)) {
        map.points.create({
          list: store.getters['event/pointsVisibleOnMap'],
        });
      }
    })
    .catch(() => undefined);
}

export const autoUpdate = {
  run () {
    const secondsToFullMinute = 60 - Number(moment().format('s'));
    timeoutID = setTimeout(() => {
      autoUpdate.once();
      intervalID = setInterval(intervalMethod, intervalTime);
    }, secondsToFullMinute * oneSecond);
  },
  once () {
    intervalMethod();
  },
  stop () {
    clearTimeout(timeoutID);
    clearInterval(intervalID);
    timeoutID = null;
    intervalID = null;
  },
};
