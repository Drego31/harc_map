<template>
  <t-page>
    <div class="a-title">Zarejestruj się</div>
    <o-form-sign-up/>
    <a-button @click="$router.push('/')">Wróć do logowania</a-button>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OFormSignUp from 'organisms/form/sign-up';
import AButton from 'atoms/button';

export default {
  name: 'p-sign-up',
  components: {
    AButton,
    OFormSignUp,
    TPage,
  },
};
</script>
