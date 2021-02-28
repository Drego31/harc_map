<template>
  <div>
    <slot/>
    <div class="o-map" id="o-map"></div>
    <div ref="mapPopup" class="o-popup f-map">
      <div
        @click="$router.push(ROUTES.adminPanel)"
        class="f-flex"
      >
        <a-icon :name="ICONS.edit"/>
        <div class="f-flex-1 f-pl-1">
          Edycja
        </div>
      </div>
      <div
        @click="popup.hide()"
        class="f-flex"
      >
        <a-icon :name="ICONS.close"/>
        <div class="f-flex-1 f-pl-1">
          Ukryj
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { map } from 'map';
import { mapMutations } from 'vuex';
import { toLonLat } from 'ol/proj';
import { Popup } from 'map/popup';
import AIcon from 'atoms/icon';

export default {
  name: 'o-map',
  components: { AIcon },
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

    this.popup = new Popup({
      container: this.$refs.mapPopup,
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
