<template>
  <o-map ref="oMap">
    <m-banner-map ref="banner" @actionTriggered="onSavePosition">
      <template slot="text">{{ $t('page.admin.setMapPosition.content') }}</template>
      <template slot="button-name">{{ $t('form.button.save') }}</template>
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
  mounted () {
    map.panToDefault();
  },
  methods: {
    onSavePosition () {
      this.$refs.oMap.saveLastMapPositionToDatabase();
      this.$store.dispatch('event/updateEvent')
        .then(() => this.$refs.banner.emitSuccessMessage());
    },
  },
};
</script>
