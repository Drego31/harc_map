import { createMap } from 'src/map/create';
import { points } from 'map/points';
import { ROUTES } from 'utils/macros/routes';
import { store } from 'store';
import router from 'src/router';
import { lines } from 'map/lines';
import { uCheck } from '@dbetka/utils';

export const map = {
  realMap: null,
  create: config => createMap(map, config),
  panToPointLocationOnMap ({ pointLatitude, pointLongitude }) {
    const mapPosition = {
      mapLatitude: pointLatitude,
      mapLongitude: pointLongitude,
    };
    store.commit('event/setMapPosition', mapPosition);
    store.commit('event/setMapZoom', 16);
    router.push(ROUTES.map.path);
  },
  points,
  lines,
};
export function updateMapFeatures () {
  store.dispatch('event/download')
    .then(() => {
      if (uCheck.isObject(map.realMap)) {
        map.points.create({
          list: store.getters['event/getPointsVisibleOnMap'],
        });
      }
    })
    .catch(() => undefined);
}
