<template>
  <t-page title="Logowanie" class="f-flex f-flex-col">
    <o-form-sign-in/>
    <a-button class="f-secondary"
              @click="$router.push('/remind-password')"
    >
      Przypomnij hasło
    </a-button>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OFormSignIn from 'organisms/form/sign-in';
import AButton from 'atoms/button';

export default {
  name: 'p-sign-in',
  components: {
    AButton,
    OFormSignIn,
    TPage,
  },
};
</script>
