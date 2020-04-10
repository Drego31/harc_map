<template>
  <t-page title="" class="f-text-center">
    <div class="a-img f-map">
    </div>
    <div>
      <a-button-primary @click="$router.push(ROUTES.signIn.path)">Logowanie</a-button-primary>
    </div>
    <div>
      <a-button-secondary @click="$router.push(ROUTES.signUp.path)">Rejestracja</a-button-secondary>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import AButtonPrimary from 'atoms/button/primary';
import AButtonSecondary from 'atoms/button/secondary';

export default {
  name: 'p-welcome',
  components: {
    AButtonSecondary,
    AButtonPrimary,
    TPage,
  },
};
</script>
