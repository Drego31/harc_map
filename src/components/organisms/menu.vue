<template>
  <div :class="isOpen ? 'f-open' : ''" class="o-menu">
    <div class="f-text-right">
      <a-button-icon @click="toggle()">
        <arrow-left-icon :size="32"/>
      </a-button-icon>
    </div>
    <div
      :key="key"
      class="f-p-1"
      v-for="(route, key) in links"
    >
      <router-link
        :to="route.path"
        @click.native="close()"
        class="a-link f-menu"
      >
        {{ route.label }}
      </router-link>
    </div>
    <div class="a-link f-menu f-p-1" @click="signOut()">
      Sign out
    </div>
    <div class="a-link f-menu f-p-1" @click="toggleTheme()">
      {{ themeName === THEMES.light ? 'Ciemny tryb' : 'Jasny tryb' }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ArrowLeftIcon from 'icons/ArrowLeft';
import AButtonIcon from 'atoms/button/icon';
import { api } from 'api/index';
import { THEMES } from 'utils/style-manager';
import { ROUTES } from 'utils/macros/routes';

export default {
  name: 'o-menu',
  components: {
    AButtonIcon,
    ArrowLeftIcon,
  },
  data: () => ({
    links: [
      ROUTES.map,
      ROUTES.collectPoint,
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
    toggleTheme () {
      this.$store.commit('theme/toggle');
    },
    signOut () {
      api.signOut({
        email: this.$store.getters['user/email'],
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
