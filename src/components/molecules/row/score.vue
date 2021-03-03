<template>
  <div>
    <div class="m-grid f-score">
      <div class="f-text-left">{{ user.userTeam }}</div>
      <div>{{ userScore }} {{ $t('general.pointUnit') }}</div>
      <div>
        <a-icon
          :name="ICONS.more_vert"
          @click="toggleDetails"
        />
      </div>
    </div>
    <o-popup-score
      ref="popupScore"
      :user="user"
    />
  </div>
</template>

<script>
import AIcon from 'atoms/icon';
import { uCheck } from '@dbetka/utils';
import OPopupScore from 'organisms/popup/score';
import { mapGetters } from 'vuex';

export default {
  name: 'm-row-score',
  components: {
    OPopupScore,
    AIcon,
  },
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
        uCheck.isDefined(point) ? collectedPoints.push(point) : undefined;
      }

      return collectedPoints
        .map(point => this.getCategoryById(point.pointCategory).pointValue)
        .reduce((a, b) => (a + b), 0);
    },
  },
  methods: {
    toggleDetails () {
      this.$refs.popupScore && this.$refs.popupScore.toggle();
    },
  },
};
</script>
