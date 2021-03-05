import Overlay from 'ol/Overlay';
import { store } from 'store';
import { fromLonLat } from 'ol/proj';
import { map } from 'src/map/index';
import { ICONS } from 'src/__jscash__/icons-names-list';

export class Popup {
  constructor ({ container }) {
    this.container = container;
    this.overlay = this.defineOverlay();
    this.hide();
    const onClick = (event) => {
      map.realMap.forEachFeatureAtPixel(event.pixel, (feature, layer) => {
        this.show(feature.ol_uid);
      });
    };
    this.bindOnClick = (event) => onClick(event);

    map.realMap.on('singleclick', this.bindOnClick);
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

  destroy () {
    map.realMap.un('singleclick', this.bindOnClick);
  }

  hide () {
    this.overlay.setPosition(undefined);
    this.container.style.visibility = 'hidden';
    return false;
  }

  show (pointOlUid) {
    const point = store.getters['event/getPointByOlUid'](pointOlUid);
    const coordinates = fromLonLat([point.pointLongitude, point.pointLatitude]);
    store.commit('mapPopup/setData', [
      {
        icon: ICONS.place,
        value: point.pointLongitude + ',' + point.pointLatitude,
      },
      {
        icon: ICONS.vpn_key,
        value: point.pointId,
      },
    ]);
    this.overlay.setPosition(coordinates);
    this.container.style.visibility = 'visible';
  }
}