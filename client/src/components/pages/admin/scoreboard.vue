<template>
  <t-page class="f-text-center">
    <div class="a-text f-title f-table">{{ $t('page.scoreboard.completionLevelOfTheGame') }}</div>
    <div class="f-pt-1">
      <m-circle-progress
        v-for="[key, {categoryId}] of permanentCategories.entries()"
        :key="`circle-progress${key}`"
        class="f-mr-1"
        :class="{'f-ml-1': key === 0}"
        :number-of-completed="numberOfCollectedPointsByCategoryId(categoryId)"
        :progress="percentageProgressByCategoryId(categoryId)"
        :max-range="numberOfPointsByCategoryId(categoryId)"
        :color="categoryColorById(categoryId)"
      />
    </div>
    <div class="f-pt-1 f-pb-3 f-text-subtext f-text-14">
      {{ $t('page.scoreboard.completionLevelDetails') }}
    </div>
    <div class="f-line-24">
      <div class="a-text f-title f-table">{{ $t('page.scoreboard.scoreboard') }}</div>
      <div class="m-row f-header f-score">
        <div>{{ $t('table.team') }}</div>
        <div>{{ $t('table.score') }}</div>
        <div>{{ $t('table.more') }}</div>
      </div>
      <div
        v-if="errorMessage"
        class="a-message f-table f-error"
        v-text="errorMessage"
      />
      <div
        v-else-if="commonUsers.length === 0"
        class="a-message f-table"
        v-text="$t('page.collectedPoints.noPoints')"
      />
      <m-row-score
        v-for="[key, {user, userScore}] of sortedUsers.entries()"
        class="f-text-subtext"
        :class="{ 'f-text-standard': key < 3 }"
        :key="user.pointId"
        :user="user"
        :user-score="userScore"
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
  data: () => ({
    errorMessage: '',
  }),
  components: {
    MCircleProgress,
    MRowScore,
    TPage,
  },
  mounted () {
    this.$store.dispatch('allUsers/download')
      .then(() => {
        this.errorMessage = '';
      })
      .catch(e => {
        this.errorMessage = e.message;
      });
  },
  computed: {
    ...mapGetters('allUsers', [
      'commonUsers',
      'scoreByUser',
    ]),
    ...mapGetters('event', [
      'permanentCategories',
      'numberOfCollectedPointsByCategoryId',
      'numberOfPointsByCategoryId',
      'percentageProgressByCategoryId',
    ]),
    ...mapGetters('theme', [
      'categoryColorById',
    ]),
    sortedUsers () {
      return this.commonUsers
        .map(user => ({
          user,
          userScore: this.scoreByUser(user),
        }))
        .sort((a, b) => b.userScore - a.userScore);
    },
  },
};
</script>
