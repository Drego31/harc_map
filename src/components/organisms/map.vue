<template>
  <div style="height: 100%; position: relative">
    <slot/>
    <div class="o-map" id="o-map"></div>
  </div>
</template>

<script>
import { map } from 'map';
import { mapMutations } from 'vuex';
import { toLonLat } from 'ol/proj';

export default {
  name: 'o-map',
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
  },
  methods: {
    ...mapMutations('event', [
      'setMapPosition',
      'setMapZoom',
    ]),
    saveLastMapPosition () {
      this.setMapPosition(this.getLastMapCords());
      this.setMapZoom(this.getLastMapZoom());
    },
    getLastMapCords () {
      const mapView = map.realMap.getView();
      const [mapLongitude, mapLatitude] = toLonLat(mapView.getCenter());
      return {
        mapLatitude,
        mapLongitude,
      };
    },
    getLastMapZoom () {
      const mapView = map.realMap.getView();
      return mapView.getZoom();
    },

    beforeDestroy () {
      this.saveLastMapPosition();
    },
  },
};
</script>
