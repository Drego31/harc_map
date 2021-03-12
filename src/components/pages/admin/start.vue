<template>
  <t-start>
    <template slot="buttons">
      <a-button-fill-primary @click="$router.push(ROUTES.scoreboard.path)">
        {{ $t('page.admin.start.checkScoreboard') }}
      </a-button-fill-primary>
      <a-button-fill-secondary @click="$router.push(ROUTES.editEvent.path)">
        {{ $t('page.admin.start.editEvent') }}
      </a-button-fill-secondary>
    </template>
  </t-start>
</template>

<script>
import AButtonFillSecondary from 'atoms/button/fill/secondary';
import AButtonFillPrimary from 'atoms/button/fill/primary';
import TStart from 'templates/start';

export default {
  name: 'p-start',
  components: {
    TStart,
    AButtonFillPrimary,
    AButtonFillSecondary,
  },
};
</script>
