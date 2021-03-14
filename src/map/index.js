import { createMap } from 'src/map/create';
import { points } from 'map/points';
import { ROUTES } from 'utils/macros/routes';
import { store } from 'store';
import router from 'src/router';
import { lines } from 'map/lines';
import { fromLonLat, toLonLat } from 'ol/proj';
import { uCheck } from '@dbetka/utils';

export const map = {
  realMap: null,
  points,
  lines,
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

  panToPointLocationOnMap ({ pointLatitude, pointLongitude }, config = { goToMap: true, zoom: 16 }) {
    map.panTo({
      latitude: pointLatitude,
      longitude: pointLongitude,
      zoom: config.zoom,
    });
    config.goToMap && router.push(ROUTES.map.path);
  },

  getMapPosition () {
    const mapView = map.realMap.getView();
    const [mapLongitude, mapLatitude] = toLonLat(mapView.getCenter());
    return {
      mapLongitude,
      mapLatitude,
      mapZoom: mapView.getZoom(),
    };
  },
  updateMapFeatures () {
    const promise = store.dispatch('event/download');
    promise.then(() => {
      if (uCheck.isObject(map.realMap)) {
        map.points.create({
          list: store.getters['event/pointsVisibleOnMap'],
        });
      }
    });
    return promise;

  },
};
