<template>
  <div class="f-flex f-flex-col f-flex-al-center">
    <div>
      HARC RUN CZY JAKOŚ TAK
    </div>
    <div>
      <component
        :is="iconStar"
        :size="40"
      />
    </div>
    <div>
      {{collectedPointsIds.length}}
    </div>
    <div>
      {{teamName}}
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
  data: () => ({
    iconStar: IconStar,
  }),
  computed: {
    ...mapGetters('user', [
      'teamName', 'collectedPointsIds',
    ]),
  },
  methods: {},
};

</script>
