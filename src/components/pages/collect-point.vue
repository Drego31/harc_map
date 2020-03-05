<template>
  <t-page :title="pageTitle">
    <o-collect-point></o-collect-point>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OCollectPoint from 'organisms/collect-point';

export default {
  name: 'p-collect-point',
  components: {
    OCollectPoint,
    TPage,
  },
  data: () => ({
    pageTitle: 'Zbierz punkt',
  }),
};
</script>
