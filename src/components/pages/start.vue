<template>
  <t-start>
    <template slot="buttons">
      <template v-if="checkIsAdmin()">
        <a-button-fill-primary
          @click="$router.push(ROUTES.scoreboard.path)"
          :text="$t('page.admin.start.checkScoreboard')"
        />
        <a-button-fill-secondary
          v-if="checkIsNotLimited()"
          @click="$router.push(ROUTES.editEvent.path)"
          :text="$t('page.admin.start.editEvent')"
        />
        <a-button-fill-secondary
          v-else
          @click="$router.push(ROUTES.searchPoint.path)"
          :text="ROUTES.searchPoint.label"
        />
      </template>

      <template v-else>
        <a-button-fill-primary
          @click="$router.push(ROUTES.map.path)"
          :text="$t('page.start.search')"
        />
        <a-button-fill-secondary
          @click="$router.push(ROUTES.collectedPoints.path)"
          :text="$t('page.start.checkResults')"
        />
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
