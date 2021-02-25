<template>
  <div>
    <slot/>
    <div class="o-map" id="o-map"></div>
    <div id="map-popup" style="position: absolute;width:300px;height:200px;background-color: black; color:white;">
      Popup
    </div>
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
      const mapView = map.realMap.getView();
      const [mapLongitude, mapLatitude] = toLonLat(mapView.getCenter());
      this.setMapPosition({
        mapLatitude,
        mapLongitude,
      });
      this.setMapZoom(mapView.getZoom());
    },
  },
  beforeDestroy () {
    this.saveLastMapPosition();
  },
};
</script>
