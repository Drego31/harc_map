<template>
  <div>
    <slot/>
    <div class="o-map" id="o-map"></div>
    <o-popup-map
      v-if="checkIsAdmin()"
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
  data: () => ({
    popup: null,
  }),
  mounted () {
    const appEvent = this.$store.getters['event/event'];

    map.create({
      elementId: 'o-map',
      lat: appEvent.mapLatitude,
      lon: appEvent.mapLongitude,
      zoom: appEvent.mapZoom,
    });
    map.points.create({
      list: this.$store.getters['event/getPointsVisibleOnMap'],
      listOfCollectedPoints: this.$store.getters['user/collectedPoints'],
    });
    map.lines.create({
      list: this.$store.getters['user/collectedPoints'],
    });

    // Map popup have to define after map creating.
    this.$refs.mapPopup && this.$refs.mapPopup.definePopup();

    map.realMap.on('moveend', this.saveLastMapPosition);
  },
  methods: {
    ...mapMutations('event', [
      'setMapPosition',
      'setMapZoom',
    ]),
    saveLastMapPosition () {
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
    map.realMap.un('moveend', this.saveLastMapPosition);
  },
};
</script>
