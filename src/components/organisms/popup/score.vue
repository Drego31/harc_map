<template>
  <div
    v-if="detailsAreOpen"
    class="m-cover f-popup"
    @click="toggle"
  >
    <div class="o-popup f-score" @click.stop>
      <a-icon-close-popup @click="toggle"/>
      <div class="f-text-subtext f-pb-1">{{ user.userTeam }}</div>
      <o-collected-points
        class="f-text-16 f-text-normal"
        :collected-points="collectedPointsByUser(user)"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import OCollectedPoints from 'organisms/collected-points';
import AIconClosePopup from 'atoms/icon/close-popup';

export default {
  name: 'o-popup-score',
  components: { AIconClosePopup, OCollectedPoints },
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
    ...mapGetters('allUsers', [
      'collectedPointsByUser',
    ]),
  },
  methods: {
    toggle () {
      this.detailsAreOpen = (this.detailsAreOpen === false);
    },
  },
};
</script>
