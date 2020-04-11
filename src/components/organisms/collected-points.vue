<template>
  <div class="f-pt-1">
    <m-list-element
      v-for="category in pointCategories"
      :key="category.categoryId"
      :point="category"
    >
      <div>{{ category.name }}</div>
      <div> Ilość: {{ getCollectedPointsLengthById(category.categoryId) }}</div>
      <div> Całkowita Wartość: {{ getCollectedPointsValueById(category.categoryId) }}</div>
    </m-list-element>
  </div>
</template>

<script>
import { pointsForDatabase } from '../../../points';
// import { mapGetters } from 'vuex';
import MListElement from 'molecules/list-element';
export default {
  components: { MListElement },
  name: 'o-collected-points',

  data: () => ({
    pointCategories: [
      {
        name: 'PIERWSZA KATEGORIA',
        categoryId: '1',
        pointValue: 1,
        pointShape: 1,
        imageColor: 'f-first_category',
      },
      {
        name: 'DRUGA KATEGORIA',
        categoryId: '2',
        pointValue: 2,
        pointShape: 2,
        imageColor: 'f-second_category',
      },
      {
        name: 'TRZECIA KATEGORIA',
        categoryId: '3',
        pointValue: 3,
        pointShape: 3,
        imageColor: 'f-third_category',
      },
    ],
  }),
  computed: {
    // ...mapGetters('user', [
    //   'collectedPointsIds',
    // ]),
  },
  methods: {
    getCategoryById (categoryId) {
      return this.pointCategories.find(category => category.categoryId === categoryId);
    },
    getPoints () {
      return pointsForDatabase().map(point => {
        const category = this.getCategoryById(point.categoryId);
        point.pointValue = category.pointValue;
      });
    },
    getCollectedPointsLengthById (categoryId) {
      const listOfCollectedPoints = this.collectedPointsIds.map(pointId => this.getPoints().find(point => point.pointId === pointId))

      // return this.collectedPointsIds.filter(point => point.categoryId === value).length;
      return this.getPoints().filter(point => point.categoryId === categoryId).length;
    },
    getCollectedPointsValueById (categoryId) {
      const length = this.getPoints().filter(point => point.categoryId === categoryId);
      return length * this.getCategoryById(categoryId).pointValue;
    },
  },
};
</script>
