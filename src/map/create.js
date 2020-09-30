import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { map } from 'map/index';
import { ErrorMessage } from 'utils/error-message';
import { ERRORS } from 'utils/macros/errors';
import { apply } from 'ol-mapbox-style';
import { THEMES } from 'utils/style-manager';
import { store } from 'store/index';
import { Attribution, defaults as defaultControls } from 'ol/control';

export function createMap (config) {
  const {
    elementId,
    lat = 0,
    lon = 0,
    zoom = 2,
    maxZoom = 19,
  } = config;

  if (!elementId) {
    const errorMessage = new ErrorMessage(ERRORS.elementIdIsRequiredForMap);
    errorMessage.showMessage('Mapa przestała działać. Proszę zgłosić usterkę do animistratora.');
  }

  map.realMap = new Map({
    target: elementId,
    // Set collapsed information about map source
    controls: defaultControls({ attribution: false }).extend([
      new Attribution({
        collapsible: true,
      }),
    ]),
    view: new View({
      center: olProj.fromLonLat([lon, lat]),
      zoom,
      maxZoom,
    }),
  });

  switch (store.getters['theme/name']) {
    case THEMES.light:
      map.realMap.addLayer(
        new TileLayer({
          source: new OSM(),
        }),
      );
      break;
    case THEMES.dark:
      apply(map.realMap, 'https://api.maptiler.com/maps/eed8967a-5c7a-4c09-9a72-dc16ebfb54ad/style.json?key=h8C6qJeBCACAF9OGJYR3');
      break;
  }
}
