<template>
  <div>
    <div class="f-line-24">
      <div class="f-text-18 f-text-bold f-mb-1">Suma punktów wg kategorii</div>
      <div class="m-grid f-category-sum f-mb-1" style="border-bottom: 1px solid gray">
        <div>Kategoria</div>
        <div>Ilość zebranych</div>
        <div>Suma wartości</div>
      </div>
      <div
        v-for="category in categories"
        :key="category.categoryId"
        class="m-grid f-category-sum"
      >
        <div>
          <a-icon :name="ICONS.stop_circle" :class="getCategoryClassById(category.categoryId)"/>
        </div>
        <div>{{ getCollectedPointsLengthById(category.categoryId) }}</div>
        <div>{{ getCollectedPointsValueById(category.categoryId) }} pkt</div>
      </div>
    </div>
    <div class="f-pt-3 f-line-24">
      <div class="f-text-18 f-text-bold f-mb-1">Lista zebranych punktów</div>
      <div class="m-grid f-point f-mb-1" style="border-bottom: 1px solid gray">
        <div>Kat.</div>
        <div>Kod</div>
        <div>Wartość</div>
        <div>Miejsce</div>
        <div>Rozwiń</div>
      </div>
      <div
        v-for="point of collectedPoints"
        :key="point.pointId"
        class="m-grid f-point"
      >
        <div>
          <a-icon :name="ICONS.stop_circle" :class="getCategoryClassById(point.pointCategory)"/>
        </div>
        <div>{{ point.pointId }}</div>
        <div>{{ getCategoryById(point.pointCategory).pointValue }} pkt</div>
        <div>
          <a-icon :name="ICONS.map"/>
        </div>
        <div>
          <a-icon :name="ICONS.arrow_drop_down"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AIcon from 'atoms/icon';

export default {
  name: 'o-collected-points',
  components: {
    AIcon,
  },
  computed: {
    ...mapGetters('user', [
      'collectedPoints',
    ]),
    ...mapGetters('event', [
      'categories',
      'getCategoryById'
    ]),
  },
  methods: { // :TODO: Change pointShape to categoryId after refactor points in API
    getCategoryClassById (categoryId) {
      const pointShape = this.getCategoryById(categoryId).pointShape;
      switch (pointShape) {
        case 1:
          return 'f-text-info';
        case 2:
          return 'f-text-warning';
        case 3:
          return 'f-text-danger';
      }
    },
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
