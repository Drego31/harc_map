<template>
  <div class="o-header">
    <div
      class="f-flex f-flex-row f-flex-al-center"
      :class="{ 'f-hidden': isMainPage }"
    >
      <a-button-icon
        class="f-arrow-back"
        @click="$router.push(pathBackButton)"
      >
        <a-icon
          name="arrow_back"
          size="32"
        />
      </a-button-icon>
    </div>
    <div class="f-flex f-flex-col f-flex-just-end">
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
      class="f-flex f-flex-row f-flex-al-center"
      :class="{ 'f-hidden': isLogin === false }"
    >
      <a-icon
        name="star"
        size="24"
      />
      <div
        class="a-chip"
        @click="$router.push(ROUTES.collectedPoints.path)"
      >
        {{ collectedPointsIds.length }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import IconStar from 'icons/Star.vue';
import AButtonIcon from 'atoms/button/icon';
import IconArrowLeft from 'icons/ArrowLeft.vue';
import { ROUTES } from 'utils/macros/routes';
import AIcon from 'atoms/icon';

export default {
  name: 'o-header',
  components: {
    AIcon,
    AButtonIcon,
    IconArrowLeft,
    IconStar,
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
};
</script>
