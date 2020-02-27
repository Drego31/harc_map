<template>
  <t-page>
    <div class="a-title">Przypomnij hasło</div>
    <o-remind-password/>
    <a-button @click="$router.push('/')">Wróć do logowania</a-button>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import AButton from 'atoms/button';
import ORemindPassword from 'organisms/form/remind-password';

export default {
  name: 'p-remind-password',
  components: {
    AButton,
    TPage,
    ORemindPassword,
  },
};
</script>
