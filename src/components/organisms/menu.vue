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
    <a class="a-link f-menu" @click="signOut()">
      Sign out
    </a>
    <a class="a-link f-menu" @click="toggleTheme()">
      {{ themeName === THEMES.light ? 'Ciemny tryb' : 'Jasny tryb' }}
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
  components: {
    // AButtonIcon,
    // IconArrowRight,
  },
  data: () => ({
    links: [
      ROUTES.home,
      ROUTES.temporaryPoints,
      ROUTES.collectPoint,
      ROUTES.map,
    ],
  }),
  computed: {
    ...mapGetters('menu', [
      'isOpen',
    ]),
    themeName () {
      return this.$store.getters['theme/name'];
    },
    THEMES: () => THEMES,
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
    },
    signOut () {
      api.signOut({
        user: this.$store.getters['user/user'],
      })
        .then(this.onSignOut)
        .catch(this.onError);
    },
    onSignOut () {
      this.$store.commit('user/signOut');
      this.$router.push(ROUTES.welcome.path);
    },
    onError () {
      alert('Something went wrong...');
    },
  },
};
</script>
