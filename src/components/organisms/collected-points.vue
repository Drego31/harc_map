<template>
  <div class="o-collected-points-table">
    <m-collected-points-table-header/>
    <m-collected-points-table-row
      v-for="category in pointCategories"
      :key="category.categoryId"
      :point="category"
      @toggle-details="toggleDetails"
    >
      <template v-slot:quantity>
        {{ getCollectedPointsLengthById(category.categoryId) }}
      </template>

      <template v-slot:value>
        {{ getCollectedPointsValueById(category.categoryId) }}
      </template>
    </m-collected-points-table-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import MListElement from 'molecules/list-element';
import MCollectedPointsTableRow from 'molecules/collected-points-table-row';
import MCollectedPointsTableHeader from 'molecules/collected-points-table-header';
export default {
  // components: { MListElement },
  name: 'o-collected-points',
  components: { MCollectedPointsTableRow, MCollectedPointsTableHeader },
  data: () => ({
    pointCategories: [
      {
        name: 'Pierwsza kategoria',
        isDetailsOpen: false,
        categoryId: 1,
        pointValue: 1,
        pointShape: 1,
        imageColor: 'f-first-category',
      },
      {
        name: 'Druga kategoria',
        isDetailsOpen: false,
        categoryId: 2,
        pointValue: 2,
        pointShape: 2,
        imageColor: 'f-second-category',
      },
      {
        name: 'Trzecia kategoria',
        isDetailsOpen: false,
        categoryId: 3,
        pointValue: 3,
        pointShape: 3,
        imageColor: 'f-third-category',
      },
    ],
  }),
  computed: {
    ...mapGetters('user', [
      'collectedPoints',
    ]),
  },
  methods: { // :TODO: Change pointShape to categoryId after refactor points in API
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
    toggleDetails (point) {
      point.isDetailsOpen = !point.isDetailsOpen;
    },
  },
};
</script>
