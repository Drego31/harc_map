<template>
  <t-page class="f-map" :backRoute="routeBackFromMap">
    <o-admin-set-new-point-position/>
  </t-page>
</template>

<script>
import OAdminSetNewPointPosition from 'organisms/admin/set-new-point-position';
import TPage from 'templates/page';
import { mapGetters } from 'vuex';

export default {
  name: 'p-admin-set-new-point-position',
  components: {
    OAdminSetNewPointPosition,
    TPage,
  },
  computed: {
    ...mapGetters('point', ['routeBackFromMap']),
  },
};
</script>
