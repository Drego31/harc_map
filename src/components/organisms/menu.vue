<template>
  <div :class="isOpen ? 'f-open' : ''" class="o-menu">
    <div class="a-text f-title f-menu">Cześć, {{ $store.getters['user/userTeam'] }}</div>

    <div class="a-text f-subtitle f-menu">
      Masz <span class="f-text-primary-hover">{{ $store.getters['user/sumOfCollectedPoints'] }} punktów</span>
    </div>

    <router-link
      v-for="(route, key) in links"
      :key="key"
      :to="route.path"
      @click.native="close()"
      class="a-link f-menu"
    >
      <div class="f-flex-1">{{ route.label }}</div>
      <a-icon
        :name="route.icon"
        class="f-menu"
        :class="{ 'f-selected': isActualPath(route) }"
      />
    </router-link>

    <a class="a-link f-menu" @click="toggleTheme()">
      <div class="f-flex-1">{{ themeName === THEMES.light ? 'Ciemny tryb' : 'Jasny tryb' }}</div>
      <a-icon
        :name="ICONS.invert_colors"
        class="f-menu"
      />
    </a>

    <a class="a-link f-menu" @click="signOut()">
      <div class="f-flex-1">Wyloguj</div>
      <a-icon
        :name="ICONS.logout"
        class="f-menu"
      />
    </a>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { api } from 'api/index';
import { THEMES } from 'utils/style-manager';
import { ROUTES } from 'utils/macros/routes';
import router from 'src/router';
import AIcon from 'atoms/icon';

export default {
  name: 'o-menu',
  components: { AIcon },
  data: () => ({
    links: [
      ROUTES.start,
      ROUTES.temporaryPoints,
      ROUTES.collectPoint,
      ROUTES.collectedPoints,
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
      router.hardReload();
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
