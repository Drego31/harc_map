<template>
  <t-page :title="pageTitle">
    <o-collect-point></o-collect-point>
    <a-button @click="$router.push('/map')">Wróć do mapy</a-button>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OCollectPoint from 'organisms/collect-point';
import AButton from 'atoms/button';

export default {
  name: 'p-collect-point',
  components: {
    AButton,
    OCollectPoint,
    TPage,
  },
  data: () => ({
    pageTitle: 'Zbierz punkt',
  }),
};
</script>
