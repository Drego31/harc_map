<template>
  <t-page :title="pageTitle">
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
  name: 'p-change-password',
  components: {
    AButton,
    TPage,
    OChangePassword,
  },
  data: () => ({
    pageTitle: 'Zmień hasło',
  }),
};
</script>
