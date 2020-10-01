<template>
  <div class="m-grid f-category-sum">
    <div>
      <a-icon-category :category-id="category.categoryId"/>
    </div>
    <div>{{ getCollectedPointsLengthById(category.categoryId) }}</div>
    <div>{{ getCollectedPointsValueById(category.categoryId) }} pkt</div>
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
    category: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters('user', [
      'collectedPoints',
    ]),
    ...mapGetters('event', [
      'getCategoryById',
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
