<template>
  <t-page>
    <div class="f-pt-1 f-pb-4">
      {{ $t('page.remindPassword.content') }}
    </div>
    <o-remind-password/>
  </t-page>
</template>

<script>
import TPage from 'templates/page';

import ORemindPassword from 'organisms/form/remind-password';

export default {
  name: 'p-remind-password',
  components: {
    TPage,
    ORemindPassword,
  },
};
</script>
