<template>
  <t-page title="Start" class="f-text-center">
    <div>
      <o-start></o-start>
      <a-button-primary @click="$router.push(ROUTES.map.path)">
        Rozpocznij poszukiwania!
      </a-button-primary>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OStart from 'organisms/start';
import AButtonPrimary from 'atoms/button/primary';

export default {
  name: 'p-start',
  components: {
    AButtonPrimary,
    TPage,
    OStart,
  },
};
</script>
