<template>
  <t-page>
    <div class="a-title">Stwórz nowe hasło</div>
    <o-change-password></o-change-password>
    <a-button @click="$router.push('/')">Wróć do logowania</a-button>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import AButton from 'atoms/button';
import OChangePassword from 'organisms/form/change-password';

export default {
  name: 'change-password.vue',
  components: {
    AButton,
    TPage,
    OChangePassword,
  },
};
</script>
