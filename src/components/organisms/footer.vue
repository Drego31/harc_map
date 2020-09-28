<template>
  <div
    class="o-footer"
    v-if="isLogin"
  >
    <a-button-icon-footer
      v-for="icon of getIcons()"
      :key="icon.label"
      :icon="icon.iconName"
      :label="icon.label"
      :size="icon.big ? 48 : 24"
      :icon-class="{ 'f-big': icon.big }"
      :class="{ 'f-big': icon.big, 'f-selected': isActualPath(icon) }"
      @click="onClick(icon)"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import AButtonIconFooter from 'atoms/button/icon-footer';
import { logical } from 'vendors/logical';
import { ROUTES } from 'utils/macros/routes';

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
    isActualPath ({ path = '' }) {
      if (this.$store.getters['menu/isOpen']) {
        return path === '';
      } else {
        return this.$route.path === path;
      }
    },
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
          ...ROUTES.start,
          iconName: this.ICONS.home,
        },
        {
          ...ROUTES.temporaryPoints,
          iconName: this.ICONS.watch_later,
        },
        {
          ...ROUTES.collectPoint,
          iconName: this.ICONS.star,
          big: true,
        },
        {
          ...ROUTES.map,
          iconName: this.ICONS.map,
        },
        {
          label: 'Menu',
          iconName: this.$store.getters['menu/isOpen'] ? this.ICONS.arrow_forward : this.ICONS.menu,
          method: this.toggle,
        },
      ];
    },
  },
};
</script>
