<template>
  <div
    class="o-footer"
    v-if="isLogin"
  >
    <a-button-icon-footer
      v-for="shortcut of getShortcuts()"
      :key="shortcut.label"
      :icon="shortcut.icon"
      :label="shortcut.shortLabel"
      :icon-class="{ 'f-big': shortcut.big }"
      :class="{ 'f-big': shortcut.big, 'f-selected': isActualPath(shortcut) }"
      @click="onClick(shortcut)"
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
    onClick (shortcut) {
      if (logical.isString(shortcut.path) && shortcut.path !== '') {
        this.$router.push(shortcut.path).catch(() => {
          this.$store.commit('menu/close');
        });
      }
      if (logical.isFunction(shortcut.method)) {
        shortcut.method();
      }
    },
    getShortcuts () {
      const isAdmin = this.checkIsAdmin();
      const isLimited = this.checkIsLimited();
      const adminRoute = isLimited ? ROUTES.spectatorPanel : ROUTES.adminPanel;
      const centralButton = {
        ...(isAdmin ? adminRoute : ROUTES.collectPoint),
        big: true,
      };
      return [
        ROUTES.start,
        ROUTES.timeoutPoints,
        centralButton,
        ROUTES.map,
        {
          shortLabel: 'Menu',
          icon: this.$store.getters['menu/isOpen'] ? this.ICONS.arrow_forward : this.ICONS.menu,
          method: this.toggle,
        },
      ];
    },
  },
};
</script>
