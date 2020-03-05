<template>
  <t-page :title="pageTitle" class="f-text-center">
    <div>
      <o-home></o-home>
      <a-button @click="$router.push('/map')">Rozpocznij poszukiwania!</a-button>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import AButton from 'atoms/button';
import OHome from 'organisms/home';

export default {
  name: 'p-home',
  components: {
    AButton,
    TPage,
    OHome,
  },
  data: () => ({
    pageTitle: 'Start',
  }),
};
</script>
