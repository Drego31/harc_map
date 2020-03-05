<template>
  <t-page :title="pageTitle" class="f-text-center">
    <div>
      <a-button @click="$router.push('/map')">Rozpocznij poszukiwania!</a-button>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import AButton from 'atoms/button';

export default {
  name: 'p-home',
  components: {
    AButton,
    TPage,
  },
  data: () => ({
    pageTitle: 'Start',
  }),
};
</script>
