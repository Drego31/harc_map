<template>
  <t-page class="f-map" :backRoute="routeBackFromMap">
    <o-admin-set-point-position/>
  </t-page>
</template>

<script>
import OAdminSetPointPosition from 'organisms/admin/set-point-position';
import TPage from 'templates/page';
import { mapGetters } from 'vuex';

export default {
  name: 'p-admin-set-new-point-position',
  components: {
    OAdminSetPointPosition,
    TPage,
  },
  computed: {
    ...mapGetters('point', ['routeBackFromMap']),
  },
};
</script>
