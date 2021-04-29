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

export default {
  name: 'o-header',
  computed: {
    ...mapGetters('user', [
      'isLogin',
      'collectedPointsIds',
    ]),
    ...mapGetters('header', [
      'pageTitle',
      'backRouteName',
    ]),
    isMainPage () {
      return [
        ROUTES.welcome.name,
        ROUTES.start.name,
        ROUTES.adminPanel.name,
        ROUTES.spectatorPanel.name,
      ].includes(this.$route.name);
    },
    pathBackButton () {
      const isAdmin = this.checkIsAdmin();
      const IsLimitedAdmin = isAdmin && this.checkIsLimited();
      if (this.backRouteName.params) return this.backRouteName;
      if (this.backRouteName.name) return ROUTES[this.backRouteName.name].path;
      if (IsLimitedAdmin) return ROUTES.spectatorPanel.path;
      if (isAdmin) return ROUTES.adminPanel.path;
      if (this.isLogin) return ROUTES.start.path;
      else return ROUTES.welcome.path;
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
