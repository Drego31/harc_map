<template>
  <div class="o-header">
    <div
      class="m-panel f-header f-side"
      :class="{ 'f-hidden': isMainPage }"
    >
      <a-icon
        :name="ICONS.arrow_back"
        :size="26"
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
      class="m-panel f-header f-side"
      :class="{ 'f-hidden': isLogin === false }"
    >
      <a-icon
        :name="ICONS.invert_colors"
        :size="26"
        class="f-header"
        @click="toggleTheme()"
      />
      <a-icon
        :name="ROUTES.collectedPoints.icon"
        :size="26"
        class="f-header"
        @click="$router.push(ROUTES.collectedPoints.path)"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { ROUTES } from 'utils/macros/routes';
import AIcon from 'atoms/icon';
import router from 'src/router';

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
      return this.isLogin ? ROUTES.start.path : ROUTES.welcome.path;
    },
  },
  methods: {
    toggleTheme () {
      this.$store.commit('theme/toggle');
      router.hardReload();
    },
  },
};
</script>
