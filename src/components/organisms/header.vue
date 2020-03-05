<template>
  <div class="o-header">
    <div
      class="f-flex f-flex-row f-flex-al-center"
      :class="isMainPage ? 'f-hidden' : 'f-visible'"
    >
      <a-button-icon
        class="f-arrow-back"
        @click="$router.push(pathBackButton)"
      >
        <icon-star :size="32"/>
      </a-button-icon>
    </div>
    <div class="f-flex f-flex-col f-flex-just-end">
      <div class="a-subtitle">
        {{ pageTitle }}
      </div>
      <div class="a-logo">
        HARCMAP
      </div>
    </div>
    <div
      class="f-flex f-flex-row f-flex-al-center"
      :class="isLogin ? 'f-visible' : 'f-hidden'"
    >
      <icon-arrow-left :size="24"/>
      <div
        class="a-chip"
        @click="$router.push('/collected-points')"
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

export default {
  name: 'o-header',
  components: {
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
      return this.isLogin ? '/home' : '/';
    },
  },
};
</script>
