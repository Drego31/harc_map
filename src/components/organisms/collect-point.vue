<template>
  <div>
    <p>Do tej pory zebrano {{collectedPointsIds.length}} punkty!</p>
    <p>Kod punktu</p>
    <a-input
      placeholder="Wpisz kod punktu..."
      v-model="collectedPointId"
    />
    <a-button @click="collectPoint(collectedPointId)">
      Zbierz punkt
    </a-button>
  </div>
</template>

<script>
import AButton from 'atoms/button';
import AInput from 'atoms/input';
import { mapManager } from 'utils/map-manager';
import { mapGetters } from 'vuex';

export default {
  name: 'o-collect-point',
  components: {
    AButton,
    AInput,
  },
  data: () => ({
    collectedPointId: '1',
  }),
  computed: {
    ...mapGetters('user', [
      'collectedPointsIds',
    ]),
  },
  methods: {
    collectPoint (pointId) {
      mapManager.collectPoint(pointId)
        .catch(errorMessage => {
          errorMessage.showMessage(`Niestety punkt o kodzie "${pointId}" już został zebrany.`);
        });
    },
  },
};
</script>
