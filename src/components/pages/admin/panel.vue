<template>
  <t-page class="f-text-center">
    <a-button-primary
      v-for="route of links"
      :key="route.name"
      @click="$router.push(route)"
    >
      {{ route.label }}
    </a-button-primary>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import AButtonPrimary from 'atoms/button/primary';
import { ROUTES } from 'utils/macros/routes';

export default {
  name: 'p-admin-panel',
  components: {
    AButtonPrimary,
    TPage,
  },
  computed: {
    links () {
      return [
        ROUTES.collectedPoints,
        ROUTES.editEvent,
        ROUTES.setMapPosition,
        ROUTES.addNewPoint,
      ];
    },
  },
};
</script>
