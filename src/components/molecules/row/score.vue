<template>
  <div>
    <div class="m-grid f-score">
      <div class="f-text-left">{{ user.userTeam }}</div>
      <div>{{ userScore }} pkt</div>
      <div>
        <a-icon
          :name="ICONS.more_vert"
          @click="toggleDetails"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AIcon from 'atoms/icon';
import { mapGetters } from 'vuex';
import { map } from 'map';
import { uCheck } from '@dbetka/utils';

export default {
  name: 'm-row-score',
  components: {
    AIcon,
  },
  data: () => ({
    detailsAreOpen: false,
  }),
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters('event', [
      'getCategoryById',
    ]),
    userScore () {
      const collectedPoints = [];

      for (const pointId of this.user.collectedPointsIds) {
        const point = this.$store.getters['event/getPointById'](pointId);
        console.log({ point });
        uCheck.isDefined(point) ? collectedPoints.push(point) : undefined;
      }

      return collectedPoints
        .map(point => this.getCategoryById(point.pointCategory).pointValue)
        .reduce((a, b) => (a + b), 0);
    },
  },
  methods: {
    toggleDetails () {
      this.detailsAreOpen = (this.detailsAreOpen === false);
    },
    panTo: map.panToPointLocationOnMap,
  },
};
</script>
