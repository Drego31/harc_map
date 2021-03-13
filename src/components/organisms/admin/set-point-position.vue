<template>
  <o-map ref="oMap" :point-options="false">
    <m-banner-map ref="banner" @actionTriggered="onSavePosition">
      <template slot="text">{{ $t('page.admin.setPointPosition.content') }}</template>
      <template slot="button-name">{{ $t('form.button.choose') }}</template>
    </m-banner-map>
    <m-pointer-map ref="map-pointer"/>
  </o-map>
</template>

<script>
import OMap from 'organisms/map';
import MBannerMap from 'molecules/banner-map';
import MPointerMap from 'molecules/map-pointer';
import { map } from 'map';
import { uCheck } from '@dbetka/utils';

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
    if (uCheck.isNotNull(this.point.pointLatitude) && uCheck.isNotNull(this.point.pointLongitude)) {
      map.panToPointLocationOnMap(this.point, { goToMap: false });
    }
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
