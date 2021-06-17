<template>
  <div class="m-grid f-category-sum">
    <div>
      <a-icon-category :category-id="category.categoryId"/>
    </div>
    <div>{{ getCollectedPointsLengthById(category.categoryId) }}</div>
    <div>{{ getCollectedPointsValueById(category.categoryId) }} {{ $t('general.pointUnit') }}</div>
  </div>
</template>

<script>
import AIconCategory from 'atoms/icon/category';
import { mapGetters } from 'vuex';

export default {
  name: 'm-row-category-sum',
  components: {
    AIconCategory,
  },
  props: {
    collectedPoints: {
      type: Array,
      required: true,
    },
    category: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters('event', [
      'getCategoryById',
      'allCollectedPoints',
    ]),
  },
  methods: {
    getCollectedPointsLengthById (categoryId) {
      return this.collectedPoints.filter(point => point.pointCategory === categoryId).length;
    },
    getCollectedPointsValueById (categoryId) {
      const length = this.collectedPoints.filter(point => point.pointCategory === categoryId).length;
      return length * this.getCategoryById(categoryId).pointValue;
    },
  },
};
</script>
