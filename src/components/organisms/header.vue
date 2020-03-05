<template>
  <div class="o-header">
    <div
      class="f-flex f-flex-row f-flex-al-center"
      :style="{visibility: toggleIsMainPage() ? 'hidden' : 'visible'}"
    >
      <a-button-icon
        class="f-arrow-back"
        @click="$router.push(toggleRouterArrowLeftPath())"
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
      :style="{visibility: isLogin ? 'visible' : 'hidden'}"
      class="f-flex f-flex-row f-flex-al-center"
    >
      <icon-arrow-left :size="24"/>
      <div
        class="a-chip"
        @click="$router.push('/collected-points')"
      >
        {{collectedPointsIds.length}}
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
  data: () => ({
    isMainPage: true,
    routerArrowLeftPath: '/',
  }),
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
  },
  methods: {
    toggleIsMainPage () {
      this.isMainPage = this.pageTitle === '' || this.pageTitle === 'Start';
      return this.isMainPage;
    },
    toggleRouterArrowLeftPath () {
      this.routerArrowLeftPath = this.isLogin ? '/home' : '/';
      return this.routerArrowLeftPath;
    },
  },
};
</script>
