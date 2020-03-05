<template>
  <div class="f-flex f-flex-col">
    <p>Do tej pory zebrano {{collectedPointsIds.length}} punkty!</p>
    <p>Kod punktu</p>
    <a-input
      placeholder="Wpisz kod punktu..."
      v-model="collectedPointId"
    />
    <a-button class="f-primary" @click="collectPoint(collectedPointId)">
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
    collectedPointId: '',
  }),
  computed: {
    ...mapGetters('user', [
      'collectedPointsIds',
    ]),
  },
  methods: {
    collectPoint (pointId) {
      mapManager.collectPoint(pointId)
        .then(() => this.$router.push('/home'))
        .catch(errorMessage => {
          errorMessage.showMessage(`Niestety punkt o kodzie "${pointId}" już został zebrany.`);
        });
    },
  },
};
</script>
