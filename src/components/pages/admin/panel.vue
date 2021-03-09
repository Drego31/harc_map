<template>
  <t-page class="f-text-center">
    <a-button-primary
      v-for="link of links"
      :key="link.name"
      @click="goTo(link)"
    >
      {{ getLabelFromLink(link) }}
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
        { route: ROUTES.scoreboard },
        { route: ROUTES.editEvent },
        { route: ROUTES.setMapPosition },
        { url: '/point/all', label: 'Pobierz listę punktów' },
      ];
    },
  },
  methods: {
    getLabelFromLink (link) {
      return link.route ? link.route.label : link.label;
    },
    goTo (link) {
      link.route ? this.$router.push(link.route) : this.goToUrl(link);
    },
    goToUrl (link) {
      window.location = link.url;
    },
  },
};
</script>
