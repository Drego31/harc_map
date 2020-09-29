<template>
  <t-page title="Start" class="f-start">
    <o-start></o-start>
    <div class="f-p-2">
      <div class="a-tile f-primary" @click="$router.push(ROUTES.map.path)">
        Rozpocznij poszukiwania!
      </div>
      <div class="a-tile f-secondary" @click="$router.push(ROUTES.collectedPoints.path)">
        Sprawdź swoje wyniki
      </div>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OStart from 'organisms/start';

export default {
  name: 'p-start',
  components: {
    TPage,
    OStart,
  },
};
</script>
