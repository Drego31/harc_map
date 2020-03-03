<template>
  <t-page class="f-text-center">
    <div class="a-img f-map">
    </div>
    <div>
      <a-button class="a-button f-primary" @click="$router.push('/sign-in')">Logowanie</a-button>
    </div>
    <div>
      <a-button class="a-button f-secondary" @click="$router.push('/sign-up')">Rejestracja</a-button>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import AButton from 'atoms/button';

export default {
  name: 'p-start',
  components: {
    AButton,
    TPage,
  },
};
</script>
