<template>
  <div class="o-header">
    <a-button-icon
      class="f-arrow-back-header"
      :style="{visibility: toggleIsMainPage() ? 'visible' : 'hidden'}"
      @click="$router.push('/')"
    >
      <component
        :is="icons[0].component"
        class="a-icon"
        :size="24"
      />
    </a-button-icon>
    <div class="f-flex f-flex-col f-flex-just-end">
      <div class="a-subtitle">
        {{pageTitle}}
      </div>
      <div class="a-logo">
        HARCMAP
      </div>
    </div>
    <div
      :style="{visibility: isLogin ? 'visible' : 'hidden'}"
      class="f-flex f-flex-row f-flex-al-center f-mr-16"
    >
      <component
        :is="icons[1].component"
        class="a-icon"
        :size="24"
      />
      <div class="a-chip">{{collectedPointsIds.length}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import IconStar from 'icons/Star.vue';
import AButtonIcon from 'atoms/button/icon';
import ArrowLeft from 'icons/ArrowLeft.vue';

export default {
  name: 'o-header',
  data: () => ({
    isMainPage: true,
    icons: [
      {
        component: ArrowLeft,
        path: '/',
      },
      {
        component: IconStar,
      },
    ],
  }),
  components: { AButtonIcon },
  computed: {
    ...mapGetters('user', [
      'isLogin', 'collectedPointsIds',
    ]),
    ...mapGetters('menu', [
      'pageTitle',
    ]),
  },
  methods: {
    ...mapMutations('menu', [
      'toggle',
    ]),
    toggleIsMainPage () {
      this.isMainPage = this.pageTitle !== '';
      return this.isMainPage;
    },
  },
};
</script>
