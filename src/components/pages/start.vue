<template>
  <t-start>
    <template slot="buttons">
      <template v-if="checkIsAdmin()">
        <a-button-fill-primary @click="$router.push(ROUTES.scoreboard.path)">
          {{ $t('page.admin.start.checkScoreboard') }}
        </a-button-fill-primary>
        <a-button-fill-secondary @click="$router.push(ROUTES.editEvent.path)">
          {{ $t('page.admin.start.editEvent') }}
        </a-button-fill-secondary>
      </template>

      <template v-else>
        <a-button-fill-primary @click="$router.push(ROUTES.map.path)">
          {{ $t('page.start.search') }}
        </a-button-fill-primary>
        <a-button-fill-secondary @click="$router.push(ROUTES.collectedPoints.path)">
          {{ $t('page.start.checkResults') }}
        </a-button-fill-secondary>
      </template>

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
