<template>
  <t-page title="Zebrane punkty" class="f-text-center">
    <o-collected-points></o-collected-points>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OCollectedPoints from 'organisms/collected-points';

export default {
  name: 'p-collected-points',
  components: {
    OCollectedPoints,
    TPage,
  },
};
</script>
