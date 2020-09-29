<template>
  <div :class="isOpen ? 'f-open' : ''" class="o-menu">
    <router-link
      v-for="(route, key) in links"
      :key="key"
      :to="route.path"
      @click.native="close()"
      class="a-link f-menu"
      :class="{ 'f-selected': isActualPath(route) }"
    >
      {{ route.label }}
    </router-link>
    <a class="a-link f-menu" @click="toggleTheme()">
      {{ themeName === THEMES.light ? 'Ciemny tryb' : 'Jasny tryb' }}
    </a>
    <a class="a-link f-menu" @click="signOut()">
      Wyloguj
    </a>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { api } from 'api/index';
import { THEMES } from 'utils/style-manager';
import { ROUTES } from 'utils/macros/routes';

export default {
  name: 'o-menu',
  data: () => ({
    links: [
      ROUTES.start,
      ROUTES.temporaryPoints,
      ROUTES.collectPoint,
      ROUTES.map,
      ROUTES.about,
    ],
    THEMES,
  }),
  computed: {
    ...mapGetters('menu', [
      'isOpen',
    ]),
    themeName () {
      return this.$store.getters['theme/name'];
    },
  },
  methods: {
    ...mapMutations('menu', [
      'toggle',
      'close',
    ]),
    isActualPath ({ path = '' }) {
      return this.$route.path === path;
    },
    toggleTheme () {
      this.$store.commit('theme/toggle');
      if (this.$router.currentRoute.path !== ROUTES.start.path) {
        this.$router.push(ROUTES.start.path);
      }
      this.close();
    },
    signOut () {
      api.signOut({
        user: this.$store.getters['user/user'],
      })
        .then(this.onSignOut)
        .catch(() => {
          alert('Something went wrong...');
        });
    },
    onSignOut () {
      this.$store.commit('user/signOut');
      this.$router.push(ROUTES.welcome.path);
    },
  },
};
</script>
