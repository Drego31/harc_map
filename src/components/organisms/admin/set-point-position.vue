<template>
  <o-map ref="oMap">
    <m-banner-map ref="banner" @actionTriggered="onSavePosition">
      <template slot="text">{{ $t('page.admin.setPointPosition.content') }}</template>
      <template slot="button-name">{{ $t('form.button.choose') }}</template>
    </m-banner-map>
    <m-pointer-map ref="map-pointer" :point-color="getPointColor"></m-pointer-map>
  </o-map>
</template>

<script>
import OMap from 'organisms/map';
import MBannerMap from 'molecules/banner-map';
import MPointerMap from 'molecules/map-pointer';
import { map } from 'map';

export default {
  name: 'o-admin-set-new-point-position',
  components: {
    MPointerMap,
    MBannerMap,
    OMap,
  },
  props: {
    point: {
      type: Object,
      required: true,
    },
  },
  mounted () {
    map.panToPointLocationOnMap(this.point, { goToMap: false });
  },
  methods: {
    onSavePosition () {
      this.$refs.banner.emitSuccessMessage()
        .then(() => this.$emit('save', this.getNewPointPosition()));
    },
    getNewPointPosition () {
      const mapPosition = map.getMapPosition();
      return {
        pointLongitude: mapPosition.mapLongitude.toFixed(5),
        pointLatitude: mapPosition.mapLatitude.toFixed(5),
      };
    },
  },
};
</script>
