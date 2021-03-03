<template>
  <t-page class="f-text-center">
    <div class="a-text f-title f-table">Poziom realizacji gry</div>
    <div class="f-pt-1">
      <m-circle-progress
        v-for="[key, {categoryId}] of filteredCategories.entries()"
        :key="`circle-progress${key}`"
        class="f-mr-1"
        :class="{'f-ml-1': key === 0}"
        :progress="numberOfCollectedPointsByCategoryId(categoryId)"
        :max-range="numberOfPointsByCategoryId(categoryId)"
        :color="categoryColorById(categoryId)"
      />
    </div>
    <div class="f-pt-1 f-pb-3 f-text-subtext f-text-14">
      Wykresy przedstawiają ilość zebranych punktów przez uczestników z podziałem na kategorie.
    </div>
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
import MCircleProgress from 'molecules/circle-progress';

export default {
  name: 'p-scoreboards',
  components: {
    MCircleProgress,
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
      'numberOfCollectedPointsByCategoryId',
      'numberOfPointsByCategoryId',
    ]),
    ...mapGetters('theme', [
      'categoryColorById',
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
