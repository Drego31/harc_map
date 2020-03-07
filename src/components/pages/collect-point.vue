<template>
  <t-page title="Zbierz punkt">
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
};
</script>
