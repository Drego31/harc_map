<template>
  <div>
    <div class="m-grid f-score">
      <div class="f-text-left">{{ user.userTeam }}</div>
      <div>{{ userScore }} pkt</div>
      <div>
        <a-icon
          :name="ICONS.more_vert"
          @click="toggleDetails"
        />
      </div>
    </div>
    <div
      v-if="detailsAreOpen"
      class="m-cover f-popup"
      @click="toggleDetails"
    >
      <div class="o-popup f-score" @click.stop>
        <div class="f-line-24 f-text-16 f-text-normal">
          <div class="a-text f-title f-table">{{ $t('page.collectedPoints.sumTitle') }}</div>
          <div class="m-row f-header f-category-sum">
            <div>{{ $t('table.category') }}</div>
            <div>{{ $t('table.numberOfCollected') }}</div>
            <div>{{ $t('table.sumOfValues') }}</div>
          </div>
          <m-row-category-sum
            :user="user"
            v-for="category in filteredCategories"
            :key="category.categoryId"
            :category="category"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AIcon from 'atoms/icon';
import { mapGetters } from 'vuex';
import { map } from 'map';
import { uCheck } from '@dbetka/utils';
import MRowCategorySum from 'molecules/row/category-sum';

export default {
  name: 'm-row-score',
  components: {
    MRowCategorySum,
    AIcon,
  },
  data: () => ({
    detailsAreOpen: false,
  }),
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters('event', [
      'getCategoryById',
    ]),
    ...mapGetters('event', [
      'categories',
    ]),
    filteredCategories () {
      return this.categories.filter(category => category.categoryId !== 0);
    },
    userScore () {
      const collectedPoints = [];

      for (const pointId of this.user.collectedPointsIds) {
        const point = this.$store.getters['event/getPointById'](pointId);
        console.log({ point });
        uCheck.isDefined(point) ? collectedPoints.push(point) : undefined;
      }

      return collectedPoints
        .map(point => this.getCategoryById(point.pointCategory).pointValue)
        .reduce((a, b) => (a + b), 0);
    },
  },
  methods: {
    toggleDetails () {
      this.detailsAreOpen = (this.detailsAreOpen === false);
    },
    panTo: map.panToPointLocationOnMap,
  },
};
</script>
