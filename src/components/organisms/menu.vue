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

export default {
  name: 'o-menu',
  components: {
    AButtonIcon,
    ArrowLeftIcon,
  },
  data: () => ({
    links: [
      {
        path: '/map',
        label: 'Map',
      },
      {
        path: '/collect-point',
        label: 'Collect Point',
      },
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
        user: this.$store.getters['user/user'],
      })
        .then(this.onSignOut)
        .catch(this.onError);
    },
    onSignOut () {
      this.$store.commit('user/signOut');
      this.$router.push('/');
    },
    onError () {
      alert('Something went wrong...');
    },
  },
};
</script>
