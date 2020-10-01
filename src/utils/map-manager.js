// import { map } from 'map/index';
import { store } from 'store/index';
import { ErrorMessage } from 'utils/error-message';
import { logical } from 'vendors/logical';
import { ERRORS } from 'utils/macros/errors';

export const mapManager = {
  collectPoint (pointId) {
    return new Promise((resolve, reject) => {
      const point = store.getters['event/getPointById'](pointId);
      // const mapIsDefined = logical.isObject(map.realMap);
      // let feature;

      if (logical.isUndefined(point)) {
        reject(ERRORS.pointWithPointIdDoesntExist(pointId));
      }

      // if (mapIsDefined) {
      //   const olUid = point.olUid;
      //   feature = map.points.getFeatureByOlUid(olUid);
      //   map.points.removeByOlUid(olUid);
      // }

      api.collectPoint({
        eventId: store.getters['event/eventId'],
        user: store.getters['user/user'],
        pointId,
      })
        .then(() => {
          store.commit('event/updatePoint', {
            pointId,
            collectionTime: Date.now()
          });
          store.commit('user/addCollectedPointId', pointId);
          resolve();
        })
        .catch(error => {
          // if (mapIsDefined) {
          //   map.points.add(feature);
          // }
          console.trace(error);
          const errorMessage = new ErrorMessage(error)
          errorMessage.showMessage('Punkt nie został zebrany przez problem z serwerem. \nSpróbuj ponownie później.');
          reject(errorMessage);
        });
    });
  },
};
