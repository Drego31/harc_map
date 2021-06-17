<template>
  <t-page class="f-text-center">
    <div class="f-py-2">
      <div class="f-bold">{{ $t('page.activationWrong.main') }}</div>
    </div>
    <a-button-primary @click="$router.push(ROUTES.welcome.path)">
      {{ $t('general.backToWelcome') }}
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
