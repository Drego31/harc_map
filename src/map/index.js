import { createMap } from 'src/map/create';
import { points } from 'map/points';
import { ROUTES } from 'utils/macros/routes';
import { store } from 'store/index';
import router from 'src/router';

export const map = {
  realMap: null,
  create: config => createMap(config),
  panToPointLocationOnMap ({ pointLatitude, pointLongitude }) {
    const mapPosition = {
      latitude: pointLatitude,
      longitude: pointLongitude,
    };
    store.commit('event/setMapPosition', mapPosition);
    store.commit('event/setMapZoom', 16);
    router.push(ROUTES.map.path);
  },
  points,
};
