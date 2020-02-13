import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import * as olProj from 'ol/proj'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { map } from 'src/map/index'

export function createMap (config) {
  const {
    elementId,
    lat = 0,
    lon = 0,
    zoom = 2,
    maxZoom = 19,
  } = config

  if (!elementId) {
    throw new Error('elementId is necessary for map')
  }

  map.realMap = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: elementId,
    view: new View({
      center: olProj.fromLonLat([lon, lat]),
      zoom,
      maxZoom,
    }),
  })
}
