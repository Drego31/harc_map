import { store } from 'store';
import { map } from 'map';
import { uCheck } from '@dbetka/utils';

const intervalTime = 60 * 1000; // 60s
let intervalID = null;

function intervalMethod () {
  store.dispatch('event/download')
    .then(() => {
      if (uCheck.isObject(map.realMap)) {
        map.points.create({
          list: this.$store.getters['event/notCollectedPoints'],
        });
      }
    })
    .catch(() => undefined);
}

export const autoUpdate = {
  run () {
    intervalID = setInterval(intervalMethod, intervalTime);
  },
  once () {
    intervalMethod();
  },
  stop () {
    clearInterval(intervalID);
    intervalID = null;
  },
};
