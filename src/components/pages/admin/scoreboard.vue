<template>
  <t-page class="f-text-center">
    <div class="f-line-24">
      <div class="a-text f-title f-table">{{ $t('page.collectedPoints.scoreTitle') }}</div>
      <div class="m-row f-header f-score">
        <div>{{ $t('table.team') }}</div>
        <div>{{ $t('table.score') }}</div>
        <div>{{ $t('table.more') }}</div>
      </div>
      <div
        v-if="commonUsers.length === 0"
        class="a-message f-table"
      >
        {{ $t('page.collectedPoints.noPoints') }}
      </div>
      <m-row-score
        v-for="user of commonUsers"
        :key="user.pointId"
        :user="user"
      />
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import { mapGetters } from 'vuex';
import MRowScore from 'molecules/row/score';

export default {
  name: 'p-scoreboards',
  components: {
    MRowScore,
    TPage,
  },
  computed: {
    ...mapGetters('allUsers', [
      'commonUsers',
    ]),
    ...mapGetters('event', [
      'categories',
      'allCollectedPoints',
    ]),
    filteredCategories () {
      return this.categories.filter(category => category.categoryId !== 0);
    },
  },
  mounted () {
    this.$store.dispatch('allUsers/download')
      .catch(e => alert(e));
  },
};
</script>
