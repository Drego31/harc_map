<template>
  <t-page class="f-map">
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
};
</script>
