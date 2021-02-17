import { store } from 'store';
import { map } from 'map';
import { uCheck } from '@dbetka/utils';
import moment from 'moment';

const intervalTime = 60 * 1000; // 60s
let intervalID = null;
let timeoutID = null;

function intervalMethod () {
  store.dispatch('event/download')
    .then(() => {
      if (uCheck.isObject(map.realMap)) {
        map.points.create({
          list: this.$store.getters['event/getPointsVisibleOnMap'],
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
    }, secondsToFullMinute * 1000);
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
