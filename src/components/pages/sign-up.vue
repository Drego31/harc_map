<template>
  <t-page title="Rejestracja">
    <o-form-sign-up/>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OFormSignUp from 'organisms/form/sign-up';

export default {
  name: 'p-sign-up',
  components: {
    OFormSignUp,
    TPage,
  },
};
</script>
