<template>
  <t-page>
    <m-clock/>
    <m-table-row-temporary-points
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
import MTableRowTemporaryPoints from 'molecules/table-row/temporary-points';
import MClock from 'molecules/clock';
import { mapGetters } from 'vuex';
import { map } from 'map';
import moment from 'moment';

export default {
  name: 'p-timeout-points',
  components: {
    TPage,
    MTableRowTemporaryPoints,
    MClock,
  },
  computed: {
    ...mapGetters('event', [
      'getTemporaryPoints',
    ]),
    points () {
      if (this.checkIsAdmin()) return this.getTemporaryPoints;
      else {
        return this.getTemporaryPoints.filter(point => {
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
