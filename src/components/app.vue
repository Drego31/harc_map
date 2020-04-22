<template>
  <div id="app">
    <o-header/>
    <div class="f-relative f-flex-1">
      <router-view/>
    </div>
    <o-footer/>
    <o-menu/>
    <!--    <o-loading :class="{'f-hide': !isLoading}"/>-->
    <transition name="fade">
      <o-loading v-show="isLoading"/>
    </transition>
  </div>
</template>

<script>
import OHeader from 'organisms/header';
import OMenu from 'organisms/menu';
import OFooter from 'organisms/footer';
import OLoading from 'organisms/loading';
import { api } from 'api/index';
import { ROUTES } from 'utils/macros/routes';
import { mapGetters } from 'vuex';
import { promise } from 'utils/promise';

export default {
  components: {
    OHeader,
    OMenu,
    OFooter,
    OLoading,
  },
  mounted () {
    api.checkYourLoginSession()
      .then(data => this.$store.dispatch('user/signIn', data))
      .then(() => this.$router.push(ROUTES.start.path))
      .then(() => promise.timeout(1000))
      .then(() => this.$store.commit('loader/setIsLoading', false));
  },
  computed: {
    ...mapGetters('loader', ['isLoading']),
  },
};
</script>
