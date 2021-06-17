<template>
  <div class="f-relative f-height-100" v-touch:swipe.stop>
    <slot/>
    <div class="o-map" id="o-map"></div>
    <o-popup-map
      v-if="checkIsAdmin() && pointOptions"
      ref="mapPopup"
    />
  </div>
</template>

<script>
import { map } from 'map';
import { mapMutations } from 'vuex';
import { toLonLat } from 'ol/proj';
import OPopupMap from 'organisms/popup/map';
import Cookies from 'js-cookie';

export default {
  name: 'o-map',
  components: { OPopupMap },
  props: {
    pointOptions: {
      type: Boolean,
      default: true,
    },
  },
  mounted () {
    const appEvent = this.$store.getters['event/event'];
    const pointList = this.$store.getters['event/pointsVisibleOnMap'];

    map.create({
      elementId: 'o-map',
      lat: appEvent.mapLatitude,
      lon: appEvent.mapLongitude,
      zoom: appEvent.mapZoom,
    });

    map.points.create({
      list: pointList,
    });

    map.lines.create({
      list: this.$store.getters['user/collectedPoints'],
    });

    // Map popup have to define after map creating.
    this.$refs.mapPopup && this.$refs.mapPopup.definePopup();

    map.realMap.on('moveend', this.saveLastMapPositionToCookies);
  },
  methods: {
    ...mapMutations('event', [
      'setMapPosition',
      'setMapZoom',
    ]),
    saveLastMapPositionToDatabase () {
      const mapView = map.realMap.getView();
      const [mapLongitude, mapLatitude] = toLonLat(mapView.getCenter());
      this.setMapPosition({
        mapLatitude,
        mapLongitude,
      });
      this.setMapZoom(mapView.getZoom());
      api.updateEvent(this.$store.getters['event/eventBasicInformation']);
    },
    saveLastMapPositionToCookies () {
      const mapView = map.realMap.getView();
      const [mapLongitude, mapLatitude] = toLonLat(mapView.getCenter());
      this.setMapPosition({
        mapLatitude,
        mapLongitude,
      });
      this.setMapZoom(mapView.getZoom());
      const dataForCookies = {
        mapLatitude,
        mapLongitude,
        mapZoom: mapView.getZoom(),
      };
      Cookies.remove('mapPosition');
      Cookies.set('mapPosition', dataForCookies, { expires: 7 });
    },
  },
  beforeDestroy () {
    map.realMap.un('moveend', this.saveLastMapPositionToCookies);
  },
};
</script>
