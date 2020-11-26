<template>
  <t-page class="f-text-center">
    <div class="f-text-48 f-pb-2">
      404
    </div>
    <div v-html="$t('page.error.content')" />
    <div class="f-pt-1">
      <a-button-primary @click="$router.push(ROUTES.welcome.path)">
        {{ $t('general.backToStart') }}
      </a-button-primary>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import AButtonPrimary from 'atoms/button/primary';

export default {
  name: 'p-error',
  components: {
    AButtonPrimary,
    TPage,
  },
};
</script>
