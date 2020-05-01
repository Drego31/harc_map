<template>
  <div>
    <m-list-element
      v-for="category in pointCategories"
      :key="category.categoryId"
      :point="category"
    >
      <div class="f-text-18 f-text-bold">{{ category.name }}</div>
      <div class="f-text-14 f-line-20"> Ilość: {{ getCollectedPointsLengthById(category.categoryId) }}</div>
      <div class="f-text-14 f-line-20"> Całkowita Wartość: {{ getCollectedPointsValueById(category.categoryId) }}</div>
    </m-list-element>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MListElement from 'molecules/list-element';

export default {
  components: { MListElement },
  name: 'o-collected-points',

  data: () => ({
    pointCategories: [
      {
        name: 'Pierwsza kategoria',
        categoryId: 1,
        pointValue: 1,
        pointShape: 1,
        imageColor: 'f-first_category',
      },
      {
        name: 'Druga kategoria',
        categoryId: 2,
        pointValue: 2,
        pointShape: 2,
        imageColor: 'f-second_category',
      },
      {
        name: 'Trzecia kategoria',
        categoryId: 3,
        pointValue: 3,
        pointShape: 3,
        imageColor: 'f-third_category',
      },
    ],
  }),
  computed: {
    ...mapGetters('user', [
      'collectedPoints',
    ]),
  },
  methods: {
    getCategoryById (categoryId) {
      return this.pointCategories.find(category => category.categoryId === categoryId);
    },
    getCollectedPointsLengthById (categoryId) {
      return this.collectedPoints.filter(point => point.pointShape === categoryId).length;
    },
    getCollectedPointsValueById (categoryId) {
      const length = this.collectedPoints.filter(point => point.pointShape === categoryId).length;
      return length * this.getCategoryById(categoryId).pointValue;
    },
  },
};
</script>
