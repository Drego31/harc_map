<template>
  <div class="o-header">
    <div
      class="m-panel f-header f-side"
      :class="{ 'f-hidden': isMainPage }"
    >
      <a-icon
        :name="ICONS.arrow_back"
        :size="28"
        @click="$router.push(pathBackButton)"
      />
    </div>
    <div class="m-panel f-header f-center">
      <template v-if="pageTitle !== ''">
        <div class="a-subtitle">
          {{ pageTitle }}
        </div>
        <div class="a-logo">
          HARCMAP
        </div>
      </template>
      <div v-else class="a-logo f-big">
        HARCMAP
      </div>
    </div>
    <div
      class="m-panel f-header f-side f-right"
    >
      <a-icon
        :name="ROUTES.collectedPoints.icon"
        :size="28"
        class="f-header"
        :class="{ 'f-hidden': isLogin === false }"
        @click="redirectToCollectedPointsOrScoreboard"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { ROUTES } from 'utils/macros/routes';
import AIcon from 'atoms/icon';

export default {
  name: 'o-header',
  components: {
    AIcon,
  },
  computed: {
    ...mapGetters('user', [
      'isLogin',
      'collectedPointsIds',
    ]),
    ...mapGetters('header', [
      'pageTitle',
    ]),
    isMainPage () {
      return this.pageTitle === '' || this.pageTitle === 'Start';
    },
    pathBackButton () {
      if (this.$route.meta.adminOnly) return ROUTES.adminPanel.path;
      return this.isLogin ? ROUTES.start.path : ROUTES.welcome.path;
    },
  },
  methods: {
    redirectToCollectedPointsOrScoreboard () {
      const route = this.checkIsAdmin() ? ROUTES.scoreboard : ROUTES.collectedPoints;
      this.$router.push(route.path);
    },
  },
};
</script>
