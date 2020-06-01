<template>
  <t-page title="" class="f-text-center">
    <div class="a-img f-map">
    </div>
    <div
      v-for="route of links"
      :key="route.name"
    >
      <a-button-primary @click="$router.push(route.path)">{{ route.label }}</a-button-primary>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import AButtonPrimary from 'atoms/button/primary';
import AButtonSecondary from 'atoms/button/secondary';
import { ROUTES } from 'utils/macros/routes';

export default {
  name: 'p-welcome',
  components: {
    AButtonSecondary,
    AButtonPrimary,
    TPage,
  },
  data: () => ({
    links: [
      ROUTES.signIn,
      ROUTES.signUp,
      ROUTES.about,
    ]
  }),
};
</script>
