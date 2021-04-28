import moment from 'moment';
import { map } from 'map';
import { ErrorMessage } from 'utils/error-message';
import { versionCompatibility } from 'utils/version-compatibility';

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
    api.information()
      .then(versionCompatibility.check)
      .then(map.updateMapFeatures)
      .catch(error => {
        if (error instanceof ErrorMessage) {
          error.showMessage();
        } else {
          (new ErrorMessage(error)).showMessage();
        }
      });
  },
  stop () {
    clearTimeout(timeoutID);
    clearInterval(intervalID);
    timeoutID = null;
    intervalID = null;
  },
};
