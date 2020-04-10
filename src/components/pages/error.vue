<template>
  <t-page title="Error 404" class="f-text-center">
    <div class="f-text-48 f-pb-2">
      404
    </div>
    <div>
      Cześć! <br>
      Wygląda na to, że znajdujesz się nie tam, gdzie trzeba - nic tu nie ma! :(
    </div>
    <div class="f-pt-1">
      <a-button-primary @click="$router.push(ROUTES.welcome.path)">
        Przejdź do strony głównej
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
