<template>
  <div class="f-relative f-height-100">
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
    let pointList = this.$store.getters['event/pointsVisibleOnMap'];
    pointList = this.changeInitialStateIfEditPoint(pointList, appEvent);

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

    changeInitialStateIfEditPoint (pointList, appEvent) {
      const pointId = this.$route.params.pointId;
      if (!pointId) return pointList;
      // :TODO Problem that this point is already filtered after second visit
      const filteredList = pointList.filter(point => point.pointId !== pointId);
      if (filteredList.length !== pointList.length) {
        this.handleEditMode(appEvent, pointId);
      }
      return filteredList;
    },

    handleEditMode (appEvent, pointId) {
      this.$store.state.point.pointId = pointId;
      this.$store.commit('point/setUpdateMode');
      const pointPosition = this.$store.getters['point/hasPositionSet']
        ? this.$store.getters['point/pointPosition']
        : this.$store.getters['event/getPointPositionById'](pointId);

      appEvent.mapLatitude = pointPosition.pointLatitude;
      appEvent.mapLongitude = pointPosition.pointLongitude;
    },
  },
  beforeDestroy () {
    map.realMap.un('moveend', this.saveLastMapPositionToCookies);
  },
};
</script>
