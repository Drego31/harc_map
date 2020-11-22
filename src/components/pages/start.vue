<template>
  <t-page title="Start" class="f-start">
    <o-start></o-start>
    <div class="m-collection f-button f-px-2">
      <a-button-fill-primary @click="$router.push(ROUTES.map.path)">
        Rozpocznij poszukiwania!
      </a-button-fill-primary>
      <a-button-fill-secondary @click="$router.push(ROUTES.collectedPoints.path)">
        Sprawdź swoje wyniki
      </a-button-fill-secondary>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OStart from 'organisms/start';
import AButtonFillSecondary from 'atoms/button/fill/secondary';
import AButtonFillPrimary from 'atoms/button/fill/primary';

export default {
  name: 'p-start',
  components: {
    AButtonFillPrimary,
    AButtonFillSecondary,
    TPage,
    OStart,
  },
};
</script>
