<template>
  <div>
    <m-clock/>
    <m-table-row-temporary-points
      v-for="point in points"
      :point="point"
      :key="point.pointId"
      :pointDurationTime="pointDurationTime"
      @panTo="panToPointLocationOnMap"
    />
  </div>
</template>

<script>
import MTableRowTemporaryPoints from 'molecules/table-row/temporary-points';
import MClock from 'molecules/clock.vue';
import { mapGetters } from 'vuex';
import { MACROS } from 'utils/macros';
import { map } from 'map/index';

export default {
  name: 'o-temporary-points',
  components: {
    MTableRowTemporaryPoints,
    MClock,
  },
  data: () => ({
    pointDurationTime: MACROS.pointDurationTime,
  }),
  computed: {
    ...mapGetters('event', {
      points: 'getTemporaryPoints',
    }),
  },
  methods: {
    panToPointLocationOnMap: map.panToPointLocationOnMap,
  },
}
;
</script>
