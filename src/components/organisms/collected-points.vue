<template>
  <div>
    <div class="a-title">
      Zebrane punkty:
    </div>
    <div v-for="point in pointCategories"
         :key=point.pointValue class="a-label f-point-container.sass">
      <icon-star :size="24"/>
      {{point.difficultName}}: {{getCollectedPointsLengthByPointValue(point.pointValue)}}
    </div>
  </div>
</template>

<script>
import { pointsForDatabase } from '../../../points';
// import { mapGetters } from 'vuex';
import IconStar from 'icons/Star.vue';

export default {
  name: 'o-collected-points',
  components: {
    IconStar,
  },
  data: () => ({
    pointCategories: [
      {
        difficultName: 'Łatwe',
        pointValue: 1,
      },
      {
        difficultName: 'Średnie',
        pointValue: 2,
      },
      {
        difficultName: 'Trudne',
        pointValue: 3,
      },
    ],
  }),
  computed: {
    // ...mapGetters('user', [
    //   'collectedPointsIds',
    // ]),
  },
  methods: {
    getCollectedPointsLengthByPointValue (value) {
      // return this.collectedPointsIds.filter(point => point.categoryId === value).length;
      return pointsForDatabase().filter(point => point.categoryId === value).length;
    },
  },
};
</script>
