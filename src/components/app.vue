<template>
  <div id="app">
    <o-header/>
    <div class="f-relative f-flex-1">
      <router-view/>
    </div>
    <o-footer/>
    <o-menu/>
  </div>
</template>

<script>
import OHeader from 'organisms/header';
import OMenu from 'organisms/menu';
import OFooter from 'organisms/footer';
import { api } from 'api/index';
import { ROUTES } from 'utils/macros/routes';

export default {
  components: {
    OFooter,
    OMenu,
    OHeader,
  },
  mounted () {
    api.checkYourLoginSession()
      .then(data => this.$store.dispatch('user/signIn', data))
      .then(() => this.$router.push(ROUTES.start.path));
  },
};
</script>
