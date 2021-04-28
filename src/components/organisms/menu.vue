<template>
  <div
    class="o-menu"
    :class="isOpen ? 'f-open' : ''"
    v-touch:swipe.right="close"
  >
    <div class="a-text f-title f-menu">{{ $t('general.hello') }}, {{ $store.getters['user/userTeam'] }}</div>

    <div v-if="checkIsCommon()" class="a-text f-subtitle f-menu">
      {{ $t('general.alreadyCollectedShort') }}
      <span class="f-text-primary-contrast">
        {{ $store.getters['user/sumOfCollectedPoints'] }} {{ $t('general.pointUnit') }}
      </span>
    </div>
    <div v-else class="a-text f-subtitle f-menu">
      {{ checkIsNotLimited() ? $t('general.fullAdmin') : $t('general.limitedAdmin') }}
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

    <a-link-menu
      v-if="checkIsCommon()"
      @click="openGuide()"
      :icon="ICONS.help"
      :text="$t('features.guide.howAppWorks')"
    />

    <a-link-menu
      @click="toggleTheme()"
      :icon="ICONS.brightness_4"
      :text="themeName === THEMES.light ? $t('general.darkTheme') : $t('general.lightTheme')"
    />

    <a-link-menu
      @click="signOut()"
      :icon="ICONS.logout"
      :text="$t('general.logout')"
    />

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
import { uCheck } from '@dbetka/utils';
import ALinkMenu from 'atoms/link-menu';

export default {
  name: 'o-menu',
  components: { ALinkMenu },
  data: () => ({
    THEMES,
    VERSION: VERSION,
    canToggleTheme: true,
  }),
  computed: {
    ...mapGetters('menu', [
      'isOpen',
    ]),
    links () {
      const isAdmin = this.checkIsAdmin();
      const isUnlimited = isAdmin && this.checkIsNotLimited();
      const isCommon = this.checkIsCommon();
      const links = [
        ROUTES.start,
        ROUTES.temporaryPoints,
        isCommon ? ROUTES.collectPoint : undefined,
        isAdmin ? ROUTES.scoreboard : ROUTES.collectedPoints,
        isUnlimited ? ROUTES.editEvent : undefined,
        isUnlimited ? ROUTES.newPoint : undefined,
        ROUTES.map,
        isCommon ? ROUTES.about : undefined,
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
    openGuide () {
      this.$store.commit('guide/open');
      this.close();
    },
    isActualPath ({ path = '' }) {
      return this.$route.path === path;
    },
    toggleTheme () {
      if (this.canToggleTheme) {
        this.canToggleTheme = false;
        this.$store.commit('theme/toggle');
        router.hardReload();
        this.close();
        setTimeout(() => {
          this.canToggleTheme = true;
        }, 500);

      }

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
