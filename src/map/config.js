import OSM from 'ol/source/OSM';

export const mapConfig = {
  /**
   * sources can be only:
   * - link to style.json file from api.maptiler.com
   * - source object prepared for TileLayer class
   */
  sources: {
    light: new OSM(),
    dark: 'https://api.maptiler.com/maps/eed8967a-5c7a-4c09-9a72-dc16ebfb54ad/style.json?key=h8C6qJeBCACAF9OGJYR3',
  },
  settings: {
    lat: 0, // in degrees
    lon: 0, // in degrees
    zoom: 2,
    maxZoom: 19,
  },
  features: {
    defaultWidth: 2,
    zIndex: 10,
  },
};
