<template>
  <div>
    <div class="f-line-24">
      <div class="f-text-18 f-text-bold f-mb-1">Suma punktów wg kategorii</div>
      <div class="m-grid f-category-sum f-mb-1" style="border-bottom: 1px solid gray">
        <div>Kategoria</div>
        <div>Ilość zebranych</div>
        <div>Suma wartości</div>
      </div>
      <div class="m-grid f-category-sum">
        <div><a-icon :name="ICONS.stop_circle" class="f-text-danger" /></div>
        <div>40</div>
        <div>320 pkt</div>
      </div>
      <div class="m-grid f-category-sum">
        <div><a-icon :name="ICONS.stop_circle" class="f-text-warning" /></div>
        <div>40</div>
        <div>320 pkt</div>
      </div>
      <div class="m-grid f-category-sum">
        <div><a-icon :name="ICONS.stop_circle" class="f-text-info" /></div>
        <div>40</div>
        <div>320 pkt</div>
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
      <div class="m-grid f-point">
        <div><a-icon :name="ICONS.stop_circle" class="f-text-info" /></div>
        <div>ksf0</div>
        <div>1 pkt</div>
        <div><a-icon :name="ICONS.map" /></div>
        <div><a-icon :name="ICONS.arrow_drop_down"/></div>
      </div>
      <div class="m-grid f-point">
        <div><a-icon :name="ICONS.stop_circle" class="f-text-info" /></div>
        <div>ksf0</div>
        <div>1 pkt</div>
        <div><a-icon :name="ICONS.map" /></div>
        <div><a-icon :name="ICONS.arrow_drop_down"/></div>
      </div>
      <div class="m-grid f-point">
        <div><a-icon :name="ICONS.stop_circle" class="f-text-warning" /></div>
        <div>ksf0</div>
        <div>3 pkt</div>
        <div><a-icon :name="ICONS.map" /></div>
        <div><a-icon :name="ICONS.arrow_drop_down"/></div>
      </div>
      <div class="m-grid f-point">
        <div><a-icon :name="ICONS.stop_circle" class="f-text-danger" /></div>
        <div>ksf0</div>
        <div>7 pkt</div>
        <div><a-icon :name="ICONS.map" /></div>
        <div><a-icon :name="ICONS.arrow_drop_down"/></div>
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
      return this.collectedPoints.filter(point => point.pointCategory === categoryId).length;
    },
    getCollectedPointsValueById (categoryId) {
      const length = this.collectedPoints.filter(point => point.pointCategory === categoryId).length;
      return length * this.getCategoryById(categoryId).pointValue;
    },
    toggleDetails (point) {
      point.isDetailsOpen = !point.isDetailsOpen;
    },
  },
};
</script>
