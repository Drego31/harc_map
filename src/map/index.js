import { createMap } from 'src/map/create';
import { points } from 'map/points';
import { ROUTES } from 'utils/macros/routes';
import { store } from 'store';
import router from 'src/router';
import { lines } from 'map/lines';
import { fromLonLat } from 'ol/proj';

export const map = {
  realMap: null,
  create: config => createMap(map, config),
  panTo ({ latitude, longitude, zoom }) {
    function panToView () {
      const view = map.realMap.getView();
      view.setCenter(fromLonLat([longitude, latitude]));
      view.setZoom(zoom);
    }
    const mapPosition = {
      mapLatitude: latitude,
      mapLongitude: longitude,
    };
    store.commit('event/setMapPosition', mapPosition);
    zoom && store.commit('event/setMapZoom', zoom);
    map.realMap !== null && panToView();
  },
  panToDefault () {
    const position = store.getters['event/mapDefaultPosition'];
    map.panTo({
      latitude: position.mapDefaultLatitude,
      longitude: position.mapDefaultLongitude,
      zoom: position.mapDefaultZoom,
    });
  },
  panToPointLocationOnMap ({ pointLatitude, pointLongitude }) {
    map.panTo({
      latitude: pointLatitude,
      longitude: pointLongitude,
      zoom: 16,
    });
    router.push(ROUTES.map.path);
  },
  points,
  lines,
};
