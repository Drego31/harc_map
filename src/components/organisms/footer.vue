<template>
  <div
    class="o-footer"
    v-if="isLogin"
  >
    <a-button-icon-footer
      v-for="icon of getIcons()"
      :key="icon.label"
      :icon="icon.component"
      :label="icon.label"
      @click="onClick(icon)"
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
import { logical } from 'utils/logical';

export default {
  name: 'o-footer',
  components: {
    AButtonIconFooter,
  },
  computed: {
    ...mapGetters('user', [
      'isLogin',
    ]),
  },
  methods: {
    ...mapMutations('menu', [
      'toggle',
    ]),
    onClick (icon) {
      if (logical.isString(icon.path) && icon.path !== '') {
        this.$router.push(icon.path).catch(() => {
          this.$store.commit('menu/close');
        });
      }
      if (logical.isFunction(icon.method)) {
        icon.method();
      }
    },
    getIcons () {
      return [
        {
          label: 'Start',
          component: IconHome,
          path: '/home',
        },
        {
          label: 'Czasowe',
          component: IconClock,
          path: '/collect-point',
        },
        {
          label: 'Punkty',
          component: IconStar,
          path: '/collect-point',
        },
        {
          label: 'Mapa',
          component: IconMap,
          path: '/map',
        },
        {
          label: 'Menu',
          component: IconMenu,
          method: this.toggle,
        },
      ];
    },
  },
};
</script>
