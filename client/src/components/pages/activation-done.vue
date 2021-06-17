<template>
  <t-page class="f-text-center">
    <div class="f-py-2">
      <div class="f-bold">{{ $t('page.activationDone.main') }}</div>
    </div>
    <a-button-primary @click="$router.push(ROUTES.signIn.path)">
      {{ $t('form.button.goToLogin') }}
    </a-button-primary>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import AButtonPrimary from 'atoms/button/primary';

export default {
  name: 'p-sign-up',
  components: {
    TPage,
    AButtonPrimary,
  },
};
</script>
