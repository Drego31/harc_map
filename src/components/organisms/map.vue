<template>
  <div>
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
    const position = appEvent.mapPosition;

    map.create({
      elementId: 'o-map',
      lat: position.latitude,
      lon: position.longitude,
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
      const [longitude, latitude] = toLonLat(mapView.getCenter());
      this.setMapPosition({
        latitude,
        longitude,
      });
      this.setMapZoom(mapView.getZoom());
    },
  },
  beforeDestroy () {
    this.saveLastMapPosition();
  },
};
</script>

