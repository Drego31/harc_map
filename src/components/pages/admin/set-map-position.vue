<template>
  <t-page title="Ustawienia mapy">
    <o-admin-set-map-position></o-admin-set-map-position>
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
