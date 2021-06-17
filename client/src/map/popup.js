import Overlay from 'ol/Overlay';
import { store } from 'store';
import { fromLonLat } from 'ol/proj';
import { map } from 'src/map/index';
import { ICONS } from '@dbetka/vue-material-icons';
import { MACROS } from 'utils/macros';
import moment from 'moment';

export class Popup {
  constructor ({ container }) {
    this.container = container;
    this.overlay = this.defineOverlay();
    this.hide();
    const onClick = (event) => {
      let featureWasClick = false;
      map.realMap.forEachFeatureAtPixel(event.pixel, (feature, layer) => {
        if (layer === map.points.layer) {
          featureWasClick = true;
          this.show(feature.ol_uid);
        }
      });
      featureWasClick === false && this.hide();
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
    if (point === undefined) return;

    const coordinates = fromLonLat([point.pointLongitude, point.pointLatitude]);
    const permanentPoint = point.pointType === MACROS.pointType.permanent;
    const details = permanentPoint ? this.getPermanentPointDetails(point) : this.getTimeoutPointDetails(point);
    store.commit('mapPopup/setData', details);
    store.commit('mapPopup/setPointId', point.pointId);

    this.overlay.setPosition(coordinates);
    this.container.style.visibility = 'visible';
  }

  getTimeoutPointDetails (point) {
    const dateFormat = 'HH:mm DD.MM.YYYY';
    return [
      {
        icon: ICONS.place,
        value: point.pointLatitude.toFixed(5) + ',' + point.pointLongitude.toFixed(5),
      },
      {
        icon: ICONS.title,
        value: point.pointName,
      },
      {
        icon: ICONS.watch_later,
        value: moment(new Date(point.pointAppearanceTime)).format(dateFormat),
      },
      {
        icon: ICONS.history_toggle_off,
        value: moment(new Date(point.pointExpirationTime)).format(dateFormat),
      },
    ];
  }

  getPermanentPointDetails (point) {
    const detailsList = [];
    detailsList.push({
      icon: ICONS.place,
      value: point.pointLatitude.toFixed(5) + ',' + point.pointLongitude.toFixed(5),
    });
    point.pointName && detailsList.push({
      icon: ICONS.title,
      value: point.pointName,
    });
    detailsList.push({
      icon: ICONS.vpn_key,
      value: point.pointId,
    });
    return detailsList;
  }
}
