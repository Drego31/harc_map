<template>
  <t-page class="f-map" :backRoute="ROUTES.editEvent">
    <o-admin-set-map-position/>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OAdminSetMapPosition from 'organisms/admin/set-map-position';

export default {
  name: 'p-admin-set-map-position',
  components: {
    OAdminSetMapPosition,
    TPage,
  },
};
</script>
