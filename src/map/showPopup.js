import Overlay from 'ol/Overlay';
import { store } from 'store';
import { fromLonLat } from 'ol/proj';
import { map } from 'src/map/index';

export function showPopup (pointOlUid) {
  const container = document.getElementById('map-popup');
  const overlay = new Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: {
      duration: 250,
    },
  });
  map.realMap.addOverlay(overlay);
  const point = store.getters['event/getPointByOlUid'](pointOlUid);
  const coordinates = fromLonLat([point.pointLongitude, point.pointLatitude]);
  overlay.setPosition(coordinates);
  console.log({
    container,
    point,
    coordinates,
  });
}
