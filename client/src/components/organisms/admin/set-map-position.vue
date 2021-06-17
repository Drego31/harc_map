<template>
  <o-map ref="oMap" :point-options="false">
    <m-banner-map
      ref="banner"
      @actionTriggered="onSavePosition"
      @cancel="$emit('cancel')"
    >
      <template slot="text">{{ $t('page.admin.setMapPosition.content') }}</template>
      <template slot="button-name">{{ $t('form.button.choose') }}</template>
    </m-banner-map>
  </o-map>
</template>

<script>
import OMap from 'organisms/map';
import MBannerMap from 'molecules/banner-map';
import { map } from 'map';

export default {
  name: 'o-admin-set-map-position',
  components: {
    MBannerMap,
    OMap,
  },
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  mounted () {
    map.panTo({
      latitude: this.event.mapLatitude,
      longitude: this.event.mapLongitude,
      zoom: this.event.mapZoom,
    });
  },
  methods: {
    onSavePosition () {
      this.$refs.banner.emitSuccessMessage()
        .then(() => this.$emit('save', this.getNewMapPosition()));
    },
    getNewMapPosition () {
      return map.getMapPosition();
    },
  },
};
</script>
