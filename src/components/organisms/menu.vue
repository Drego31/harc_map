<template>
  <div class="o-menu" :class="isOpen ? 'f-open' : ''">
    <div class="a-text f-title f-menu">{{ $t('general.hello') }}, {{ $store.getters['user/userTeam'] }}</div>

    <div class="a-text f-subtitle f-menu">
      {{ $t('general.alreadyCollectedShort') }}
      <span class="f-text-primary-contrast">
        {{ $store.getters['user/sumOfCollectedPoints'] }} {{ $t('general.pointUnit') }}
      </span>
    </div>

    <router-link
      v-for="(route, key) in links"
      :key="key"
      :to="route.path"
      @click.native="close()"
      class="a-link f-menu"
      :class="{ 'f-selected': isActualPath(route) }"
    >
      <a-icon
        :name="route.icon"
        class="f-menu"
      />
      <div class="f-flex-1 f-pl-3">{{ route.label }}</div>
    </router-link>

    <a class="a-link f-menu" @click="toggleTheme()">
      <a-icon
        :name="ICONS.brightness_4"
        class="f-menu"
      />
      <div class="f-flex-1 f-pl-3">{{ themeName === THEMES.light ? 'Ciemny tryb' : 'Jasny tryb' }}</div>
    </a>

    <a class="a-link f-menu" @click="signOut()">
      <a-icon
        :name="ICONS.logout"
        class="f-menu"
      />
      <div class="f-flex-1 f-pl-3">Wyloguj</div>
    </a>
    <div v-if="isOpen" class="a-version">
      v{{ VERSION }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { THEMES } from 'utils/style-manager';
import { ROUTES } from 'utils/macros/routes';
import router from 'src/router';
import AIcon from 'atoms/icon';
import { uCheck } from '@dbetka/utils';

export default {
  name: 'o-menu',
  components: { AIcon },
  data: () => ({
    THEMES,
    VERSION: VERSION,
  }),
  computed: {
    ...mapGetters('menu', [
      'isOpen',
    ]),
    links () {
      const isAdmin = this.checkIsAdmin();
      const links = [
        ROUTES.start,
        ROUTES.temporaryPoints,
        isAdmin ? undefined : ROUTES.collectPoint,
        isAdmin ? ROUTES.scoreboard : ROUTES.collectedPoints,
        ROUTES.map,
        ROUTES.about,
      ];
      return links.filter(route => uCheck.isUndefined(route) === false);
    },
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
      this.$store.dispatch('user/signOut')
        .finally(() => this.onSignOut());
    },
    onSignOut () {
      this.$router.push(ROUTES.welcome.path);
    },
  },
};
</script>
