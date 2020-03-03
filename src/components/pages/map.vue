<template>
  <t-page :title="pageTitle" class="f-map">
    <o-map/>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OMap from 'organisms/map';

export default {
  name: 'p-map',
  components: {
    OMap,
    TPage,
  },
  data: () => ({
    pageTitle: 'Mapa',
  }),
};
</script>
