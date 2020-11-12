<template>
  <t-page title="Edycja wydarzenia">
    <o-edit-event/>
  </t-page>
</template>

<script>
import OEditEvent from 'organisms/admin/edit-event';
import TPage from 'templates/page';

export default {
  name: 'edit-event',
  components: {
    TPage,
    OEditEvent,
  },
};
</script>
