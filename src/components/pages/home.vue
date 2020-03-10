<template>
  <t-page title="Start" class="f-text-center">
    <div>
      <o-home></o-home>
      <a-button-primary @click="$router.push('/map')">
        Rozpocznij poszukiwania!
      </a-button-primary>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OHome from 'organisms/home';
import AButtonPrimary from 'atoms/button/primary';

export default {
  name: 'p-home',
  components: {
    AButtonPrimary,
    TPage,
    OHome,
  },
};
</script>
