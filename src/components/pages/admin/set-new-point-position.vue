<template>
  <t-page class="f-map" :backRoute="ROUTES.addNewPoint">
    <o-admin-set-new-point-position></o-admin-set-new-point-position>
  </t-page>
</template>

<script>
import OAdminSetNewPointPosition from 'organisms/admin/set-new-point-position';
import TPage from 'templates/page';
export default {
  name: 'p-admin-set-new-point-position',
  components: { OAdminSetNewPointPosition, TPage },
};
</script>
