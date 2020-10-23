<template>
  <t-page title="Start" class="f-start">
    <o-start></o-start>
    <div class="f-p-2">
      <a-button-primary
        class="f-fill f-mt-3 f-mb-4"
        @click="$router.push(ROUTES.map.path)"
      >
        Rozpocznij poszukiwania!
      </a-button-primary>
      <a-button-secondary
        class="f-fill"
        @click="$router.push(ROUTES.collectedPoints.path)"
      >
        Sprawdź swoje wyniki
      </a-button-secondary>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OStart from 'organisms/start';
import AButtonPrimary from 'atoms/button/primary';
import AButtonSecondary from 'atoms/button/secondary';

export default {
  name: 'p-start',
  components: {
    AButtonSecondary,
    AButtonPrimary,
    TPage,
    OStart,
  },
};
</script>
