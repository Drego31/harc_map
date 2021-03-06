<template>
  <t-page>
    <m-clock/>
    <m-table-row-temporary-points
      v-for="point in points"
      :point="point"
      :key="point.pointId"
      @panTo="panToPointLocationOnMap"
    />
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import MTableRowTemporaryPoints from 'molecules/table-row/temporary-points';
import MClock from 'molecules/clock';
import { mapGetters } from 'vuex';
import { map } from 'map';

export default {
  name: 'p-timeout-points',
  components: {
    TPage,
    MTableRowTemporaryPoints,
    MClock,
  },
  computed: {
    ...mapGetters('event', {
      points: 'getTemporaryPoints',
    }),
  },
  methods: {
    panToPointLocationOnMap: map.panToPointLocationOnMap,
  },
};
</script>
