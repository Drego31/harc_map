import { map } from 'map/index';
import { store } from 'store/index';

export const mapManager = {
  collectPoint (pointId) {
    const olUid = store.getters['event/getPointById'](pointId).olUid;
    const feature = map.points.getFeatureByOlUid(olUid);
    map.points.removeByOlUid(olUid);
    api.collectPoint({
      pointId,
    })
      .then(() => {
        store.commit('event/removePoint', pointId);
      })
      .catch(() => {
        map.points.add(feature);
      });
  },
};
