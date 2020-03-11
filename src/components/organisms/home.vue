<template>
  <div class="f-flex f-flex-col f-flex-al-center">
    <div>
      HARC RUN CZY JAKOŚ TAK
    </div>
    <div>
      <icon-star :size="40"/>
    </div>
    <div>
      {{ collectedPointsIds.length }}
    </div>
    <div>
      {{ userTeam }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import IconStar from 'icons/Star.vue';

export default {
  name: 'o-home',
  components: {
    IconStar,
  },
  computed: {
    ...mapGetters('user', [
      'userTeam', 'collectedPointsIds',
    ]),
  },
};

</script>
