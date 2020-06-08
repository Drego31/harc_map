<template>
  <t-page title="Zmień hasło">
    <o-change-password></o-change-password>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OChangePassword from 'organisms/form/change-password';

export default {
  name: 'p-change-password',
  components: {
    TPage,
    OChangePassword,
  },
};
</script>
