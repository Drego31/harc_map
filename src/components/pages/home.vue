<template>
  <t-page title="Start" class="f-text-center">
    <div>
      <o-home></o-home>
      <a-button-primary @click="$router.push(ROUTES.map.path)">
        Rozpocznij poszukiwania!
      </a-button-primary>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OHome from 'organisms/home';
import AButtonPrimary from 'atoms/button/primary';
import { ROUTES } from 'utils/macros/routes';

export default {
  name: 'p-home',
  components: {
    AButtonPrimary,
    TPage,
    OHome,
  },
  computed: {
    ROUTES: () => ROUTES,
  },
};
</script>
