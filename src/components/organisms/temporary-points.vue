<template>
  <div>
    <m-clock/>
    <m-table-row-temporary-points
      v-for="point in points"
      :point="point"
      :key="point.pointId"
      @panTo="panToPointLocationOnMap"
    />
  </div>
</template>

<script>
import MTableRowTemporaryPoints from 'molecules/table-row/temporary-points';
import MClock from 'molecules/clock.vue';
import { mapGetters } from 'vuex';
import { map } from 'map';

export default {
  name: 'o-temporary-points',
  components: {
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
}
;
</script>
