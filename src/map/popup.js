import Overlay from 'ol/Overlay';
import { store } from 'store';
import { fromLonLat } from 'ol/proj';
import { map } from 'src/map/index';

export class Popup {
  constructor ({ container }) {
    this.container = container;
    this.overlay = this.defineOverlay();
    this.hide();

    map.realMap.on('singleclick', (event) => {
      map.realMap.forEachFeatureAtPixel(event.pixel, (feature, layer) => {
        this.show(feature.ol_uid);
      });
    });
  }

  defineOverlay () {
    const overlay = new Overlay({
      element: this.container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250,
      },
    });
    map.realMap.addOverlay(overlay);
    return overlay;
  }

  hide () {
    console.log('hide');
    this.overlay.setPosition(undefined);
    // closer.blur();
    this.container.style.visibility = 'hidden';
    return false;
  }

  show (pointOlUid) {
    const point = store.getters['event/getPointByOlUid'](pointOlUid);
    const coordinates = fromLonLat([point.pointLongitude, point.pointLatitude]);
    this.overlay.setPosition(coordinates);
    this.container.style.visibility = 'visible';
  }
}
