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
import { uCheck } from '@dbetka/utils';

export default {
  name: 'm-row-category-sum',
  components: {
    AIconCategory,
  },
  props: {
    user: {
      type: Object,
      default: null,
    },
    category: {
      type: Object,
      required: true,
    },
    allUsers: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters('user', {
      userCollectedPoints: 'collectedPoints',
    }),
    ...mapGetters('event', [
      'getCategoryById',
      'allCollectedPoints',
    ]),
    collectedPoints () {
      const propsUserCollectedPoints = [];
      if (this.user !== null) {
        for (const pointId of getters.collectedPointsIds) {
          const point = this.$store.getters['event/getPointById'](pointId);
          uCheck.isDefined(point) ? propsUserCollectedPoints.push(point) : undefined;
        }
      }
      const userCollectedPoints = this.user !== null ? propsUserCollectedPoints : this.userCollectedPoints;

      return this.allUsers ? this.allCollectedPoints : userCollectedPoints;
    },
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
