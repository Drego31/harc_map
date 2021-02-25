<template>
  <o-map ref="oMap">
    <m-banner-map ref="banner" @actionTriggered="onSavePosition">
      <template slot="text">{{ $t('page.admin.setNewPointPosition.content') }}</template>
      <template slot="button-name">{{ $t('form.button.save') }}</template>
    </m-banner-map>
    <div class="m-pointer" :style="{backgroundColor: getPointColor}"></div>
  </o-map>
</template>

<script>
import OMap from 'organisms/map';
import MBannerMap from 'molecules/banner-map';
import { mapGetters } from 'vuex';

export default {
  name: 'o-admin-set-new-point-position',
  components: {
    MBannerMap,
    OMap,
  },
  props: {
    pointCategory: {
      default: 2,
      type: Number,
    },
  },
  computed: {
    ...mapGetters('point', [
      'getPointColor',
    ]),
  },
  methods: {
    onSavePosition () {
      this.$store.commit('point/setPointPosition', this.getPointPosition());
      this.$refs.banner.emitSuccessMessage(this.ROUTES.addNewPoint.path);
    },
    getPointPosition () {
      const mapPosition = this.$refs.oMap.getLastMapCords();
      return {
        pointLongitude: mapPosition.mapLongitude,
        pointLatitude: mapPosition.mapLatitude,
      };
    },
  },
};
</script>
<style>

</style>
