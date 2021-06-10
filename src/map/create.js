import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { ErrorMessage } from 'utils/error-message';
import { ERRORS } from 'utils/macros/errors';
import { store } from 'store';
import { Attribution, defaults as defaultControls } from 'ol/control';
import { mapConfig } from 'map/config';

export function createMap (map, config) {
  const {
    elementId,
    lat = mapConfig.settings.lat,
    lon = mapConfig.settings.lon,
    zoom = mapConfig.settings.zoom,
    maxZoom = mapConfig.settings.maxZoom,
  } = config;

  if (!elementId) {
    const errorMessage = new ErrorMessage(ERRORS.elementIdIsRequiredForMap);
    errorMessage.showMessage('Mapa przestała działać. Proszę zgłosić usterkę do administratora.');
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

  addMapTilesSuitToTheme(map);
}

function addMapTilesSuitToTheme (map) {
  const theme = store.getters['theme/name'];
  const source = mapConfig.sources[theme];

  map.realMap.addLayer(
    new TileLayer({
      className: theme + '-map-layer',
      source: source,
    }),
  );
}
