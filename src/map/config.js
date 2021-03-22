import OSM from 'ol/source/OSM';

export const mapConfig = {
  // sources can be only source object prepared for TileLayer class
  sources: {
    light: new OSM(),
    dark: new OSM(),
  },
  settings: {
    lat: 0, // range from -90 to 90 degrees
    lon: 0, // range from -180 to 180 degrees
    zoom: 2,
    maxZoom: 17,
  },
  features: {
    defaultWidth: 2,
    zIndex: 10,
  },
  lineConnectingPoints: {
    visible: true,
    color: '#008844',
    width: 4,
  },
};
