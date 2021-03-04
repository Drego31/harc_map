<template>
  <div style="height: 100%; position: relative">
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
      this.setMapPosition(this.getLastMapCords());
      this.setMapZoom(this.getLastMapZoom());
      this.updateMapPositionCookies();
    },

    getLastMapCords () {
      const mapView = map.realMap.getView();
      const [mapLongitude, mapLatitude] = toLonLat(mapView.getCenter());
      return {
        mapLatitude,
        mapLongitude,
      };
    },
    updateMapPositionCookies () {
      const cookieDate = {
        ...this.getLastMapCords(),
        mapZoom: this.getLastMapZoom(),
      };
      Cookies.remove('mapPosition');
      Cookies.set('mapPosition', cookieDate, { expires: 7 });
    },
    getLastMapZoom () {
      const mapView = map.realMap.getView();
      return mapView.getZoom();
    },

    beforeDestroy () {
      map.realMap.un('moveend', this.saveLastMapPosition);
    },
  },
};
</script>
