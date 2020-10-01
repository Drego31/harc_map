<template>
  <div>
    <div class="f-line-24">
      <div class="a-text f-title f-table">Suma punktów wg kategorii</div>
      <div class="m-row f-header f-category-sum">
        <div>Kategoria</div>
        <div>Ilość zebranych</div>
        <div>Suma wartości</div>
      </div>
      <m-row-category-sum
        v-for="[key, category] in categories.entries()"
        v-if="key > 0"
        :key="category.categoryId"
        :category="category"
      />
    </div>
    <div class="f-pt-3 f-line-24">
      <div class="a-text f-title f-table">Lista zebranych punktów</div>
      <div class="m-row f-header f-point">
        <div>Kat.</div>
        <div>Kod</div>
        <div>Wartość</div>
        <div>Miejsce</div>
        <div>Rozwiń</div>
      </div>
      <m-row-point
        v-for="point of collectedPoints.reverse()"
        :key="point.pointId"
        :point="point"
      />
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MRowCategorySum from 'molecules/row/category-sum';
import MRowPoint from 'molecules/row/point';

export default {
  name: 'o-collected-points',
  components: {
    MRowPoint,
    MRowCategorySum,
  },
  computed: {
    ...mapGetters('user', [
      'collectedPoints',
    ]),
    ...mapGetters('event', [
      'categories',
    ]),
  },
};
</script>
