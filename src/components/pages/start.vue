<template>
  <t-start>
    <template slot="message">
      <div v-if="sumOfCollectedPoints > 0">
        {{ $t('page.start.alreadyCollected') }}
        <span class="f-text-white">
          {{ sumOfCollectedPoints }} {{ $t('general.pointUnit') }}
        </span>
      </div>
      <div v-else>
        {{ $t('page.start.nothingCollected') }}
      </div>
    </template>

    <template slot="buttons">
      <a-button-fill-primary @click="$router.push(ROUTES.map.path)">
        {{ $t('page.start.search') }}
      </a-button-fill-primary>
      <a-button-fill-secondary @click="$router.push(ROUTES.collectedPoints.path)">
        {{ $t('page.start.checkResults') }}
      </a-button-fill-secondary>
    </template>
  </t-start>
</template>

<script>
import { mapGetters } from 'vuex';
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
  computed: {
    ...mapGetters('user', [
      'sumOfCollectedPoints',
    ]),
  },
};
</script>
