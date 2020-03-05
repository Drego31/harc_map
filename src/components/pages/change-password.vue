<template>
  <t-page :title="pageTitle">
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
  data: () => ({
    pageTitle: 'Zmień hasło',
  }),
};
</script>
