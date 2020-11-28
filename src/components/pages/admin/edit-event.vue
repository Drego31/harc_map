<template>
  <t-page>
    <o-admin-edit-event/>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OAdminEditEvent from 'organisms/admin/edit-event';

export default {
  name: 'p-admin-edit-event',
  components: {
    OAdminEditEvent,
    TPage,
  },
};
</script>
