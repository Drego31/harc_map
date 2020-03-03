<template>
  <t-page>
    <div class="a-title f-flex f-flex-col f-flex-al-cen">Logowanie</div>
    <o-form-sign-in/>
    <a-button class="a-button f-secondary" @click="$router.push('/remind-password')">Przypomnij hasło</a-button>
    <!--    <a-button @click="$router.push('/sign-up')">Zarejestruj</a-button>-->
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
