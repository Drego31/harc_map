<template>
  <div>
    <m-table-row add-class="f-py-1">
      <template v-slot:cols>
        <div/>

        <div class="f-text-bold">
          Wartość
        </div>

        <div class="f-text-bold">
          Ilość
        </div>
      </template>
    </m-table-row>

    <m-table-row-collected-points
      v-for="category in pointCategories"
      :key="category.categoryId"
      :category="category"
      :quantity="getCollectedPointsLengthById(category.categoryId)"
      :value="getCollectedPointsValueById(category.categoryId)"
    />

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MTableRow from 'molecules/table-row';
import MTableRowCollectedPoints from 'molecules/table-row/collected-points';

export default {
  name: 'o-collected-points',
  components: {
    MTableRowCollectedPoints,
    MTableRow,

  },
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
