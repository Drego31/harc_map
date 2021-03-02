<template>
  <div>
    <div class="f-line-24">
      <div class="a-text f-title f-table">{{ $t('page.collectedPoints.sumTitle') }}</div>
      <div class="m-row f-header f-category-sum">
        <div>{{ $t('table.category') }}</div>
        <div>{{ $t('table.numberOfCollected') }}</div>
        <div>{{ $t('table.sumOfValues') }}</div>
      </div>
      <m-row-category-sum
        v-for="category in filteredCategories"
        :key="category.categoryId"
        :category="category"
        allUsers
      />
    </div>
    <div class="f-pt-3 f-line-24">
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

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MRowCategorySum from 'molecules/row/category-sum';
import MRowScore from 'molecules/row/score';

export default {
  name: 'o-admin-collected-points',
  components: {
    MRowScore,
    MRowCategorySum,
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
