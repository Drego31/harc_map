<template>
  <t-page>
    <m-clock/>
    <m-table-row-timeout-points
      v-for="point in points"
      :point="point"
      :key="point.pointId"
      @panTo="panToPointLocationOnMap"
    />
    <div v-if="points.length === 0" class="a-message f-table f-text-center">
      {{ $t('page.timeoutPoints.noResults') }}
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import MTableRowTimeoutPoints from 'molecules/table-row/timeout-points';
import MClock from 'molecules/clock';
import { mapGetters } from 'vuex';
import { map } from 'map';
import moment from 'moment';

export default {
  name: 'p-timeout-points',
  components: {
    TPage,
    MTableRowTimeoutPoints,
    MClock,
  },
  computed: {
    ...mapGetters('event', [
      'getTimeoutPoints',
    ]),
    points () {
      if (this.checkIsAdmin()) return this.getTimeoutPoints;
      else {
        return this.getTimeoutPoints.filter(point => {
          const appearanceTime = moment(new Date(point.pointAppearanceTime));
          const now = moment();
          return now.diff(appearanceTime, 'days') === 0;
        });
      }
    },
  },
  methods: {
    panToPointLocationOnMap: map.panToPointLocationOnMap,
  },
};
</script>
