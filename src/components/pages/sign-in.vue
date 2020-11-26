<template>
  <t-page class="f-flex f-flex-col">
    <o-form-sign-in/>
    <a-button-secondary @click="$router.push(ROUTES.remindPassword.path)">
      {{ ROUTES.remindPassword.label }}
    </a-button-secondary>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OFormSignIn from 'organisms/form/sign-in';
import AButtonSecondary from 'atoms/button/secondary';

export default {
  name: 'p-sign-in',
  components: {
    AButtonSecondary,
    OFormSignIn,
    TPage,
  },
};
</script>
