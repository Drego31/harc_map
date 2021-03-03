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
import OPopupScore from 'organisms/popup/score';

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
    userScore: {
      type: Number,
      required: true,
    },
  },
  methods: {
    toggleDetails () {
      this.$refs.popupScore && this.$refs.popupScore.toggle();
    },
  },
};
</script>
