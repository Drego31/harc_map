<template>
  <o-map ref="oMap">
    <m-banner-map @actionTriggered="onSavePosition">
      <template slot="text">Ustaw mapę w wybranej pozycji i zapisz.</template>
      <template slot="button-name">Zapisz</template>
    </m-banner-map>
  </o-map>
</template>

<script>
import OMap from 'organisms/map';
import MBannerMap from 'molecules/banner-map';

export default {
  name: 'o-admin-set-map-position',
  components: {
    MBannerMap,
    OMap,
  },
  methods: {
    onSavePosition () {
      this.$refs.oMap.saveLastMapPosition();
      this.$store.dispatch('event/updateEvent');
    },
  },
};
</script>
