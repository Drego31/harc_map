<template>
  <div class="t-page">
    <slot/>
  </div>
</template>

<script>
import { ROUTES } from 'utils/macros/routes';

export default {
  name: 't-page',
  props: {
    backRoute: {
      type: Object,
      default: () => ({ name: '' }),
    },
  },
  mounted () {
    const route = ROUTES[this.$router.currentRoute.name] || {};
    const title = route.label;
    this.$store.commit('header/setPageTitle', title);
    this.$store.commit('header/setBackRouteName', this.backRoute.name);
    if (title) {
      document.title = `${title} - ${APP_NAME}`;
    } else {
      document.title = APP_NAME;
    }
  },
};
</script>
