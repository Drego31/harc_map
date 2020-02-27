import { map } from 'map/index';
import { store } from 'store/index';
import { ErrorMessage } from 'utils/error-message';
import { logical } from 'utils/logical';
import { ERRORS } from 'utils/macros/errors';

export const mapManager = {
  collectPoint (pointId) {
    return new Promise((resolve, reject) => {
      const point = store.getters['event/getPointById'](pointId);
      if (logical.isUndefined(point)) {
        const errorMessage = new ErrorMessage(ERRORS.pointWithPointIdDoesntExist(pointId));
        reject(errorMessage);
      }
      const olUid = point.olUid;
      const feature = map.points.getFeatureByOlUid(olUid);

      map.points.removeByOlUid(olUid);
      api.collectPoint({
        pointId,
      })
        .then(() => {
          store.commit('event/removePoint', point);
          resolve();
        })
        .catch(errorMessage => {
          map.points.add(feature);
          errorMessage.showMessage('Punkt nie został zebrany przez problem z serwerem. \nSpróbuj ponownie później.');
          reject(errorMessage);
        });
    });
  },
};
