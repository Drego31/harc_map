<template>
  <t-page title="" class="f-text-center">
    <div class="a-img f-map">
    </div>
    <div>
      <a-button-primary @click="$router.push('/sign-in')">Logowanie</a-button-primary>
    </div>
    <div>
      <a-button-secondary @click="$router.push('/sign-up')">Rejestracja</a-button-secondary>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import AButtonPrimary from 'atoms/button/primary';
import AButtonSecondary from 'atoms/button/secondary';
export default {
  name: 'p-start',
  components: {
    AButtonSecondary,
    AButtonPrimary,
    TPage,
  },
};
</script>
