<template>
  <t-page class="f-text-center">
    <o-collected-points :collected-points="collectedPoints"/>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OCollectedPoints from 'organisms/collected-points';
import { mapGetters } from 'vuex';

export default {
  name: 'p-collected-points',
  components: {
    OCollectedPoints,
    TPage,
  },
  computed: {
    ...mapGetters('user', ['collectedPoints']),
  },
};
</script>
