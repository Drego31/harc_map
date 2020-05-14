<template>
  <div>
    <m-table-row add-class="f-py-1">
      <template v-slot:cols>
        <div>

        </div>

        <div class="f-text-bold">
          Wartość
        </div>

        <div class="f-text-bold">
          Ilość
        </div>
      </template>
    </m-table-row>

    <m-table-row
      v-for="category in pointCategories"
      :key="category.categoryId"
      add-class="f-collected-points"
      :point="category"
      @toggle-details="toggleDetails"
    >
      <template v-slot:cols>
        <div>
          <!--          <icon-star :size="64" class="a-icon" :class="point.imageColor"/>-->
        </div>

        <div class="f-text-32 f-text-bold">
          {{ getCollectedPointsLengthById(category.categoryId) }}
        </div>

        <div class="f-text-32 f-text-bold">
          {{ getCollectedPointsValueById(category.categoryId) }}
        </div>
      </template>
      <template v-slot:details>
        <template v-if="point.isDetailsOpen">
          <div class="f-text-14 f-text-italic f-line-18"> Nazwa kategorii: <strong>{{ point.name }}</strong></div>
          <div class="f-text-14 f-text-italic f-line-18">
            Wartość pojedynczego punktu:<strong> {{ point.pointValue }}</strong>
          </div>
        </template>
        <component
          :is="point.isDetailsOpen ? ArrowUp : ArrowDown"
          @click="$emit('toggle-details', point)"
          :size="24"
          class="a-icon"
          :class="point.imageColor"/>
      </template>
    </m-table-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MTableRow from 'molecules/table-row';
import MCollectedPointsTableHeader from 'molecules/collected-points-table-header';

export default {
  name: 'o-collected-points',
  components: {
    MTableRow,
    MCollectedPointsTableHeader,
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
