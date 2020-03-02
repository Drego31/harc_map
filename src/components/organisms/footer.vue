<template>
  <div
    class="o-footer"
  > <!--    v-if="isLogin"-->
    <a-button-icon-footer
      v-for="icon of icons"
      :key="icon.label"
      :icon="icon.component"
      :label="icon.label"
      @click="icon.method()"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import IconMap from 'icons/Map.vue';
import IconMenu from 'icons/Menu.vue';
import IconStar from 'icons/Star.vue';
import IconClock from 'icons/Clock.vue';
import IconHome from 'icons/Home.vue';
import AButtonIconFooter from 'atoms/button/icon-footer';

export default {
  name: 'o-footer',
  components: {
    AButtonIconFooter,
  },
  data: () => ({
    icons: [
      {
        label: 'Home',
        component: IconHome,
        method: () => {
        },
      },
      {
        label: 'Czasowe',
        component: IconClock,
        method: () => {
        },
      },
      {
        label: 'Punkty',
        component: IconStar,
        method: () => {
        },
      },
      {
        label: 'Mapa',
        component: IconMap,
        method: () => {
        },
      },
      {
        label: 'Menu',
        component: IconMenu,
        method: () => {
        },
      },
    ],
  }),
  computed: {
    ...mapGetters('user', [
      'isLogin',
    ]),
  },
  methods: {
    ...mapMutations('menu', [
      'toggle',
    ]),
  },
};
</script>
