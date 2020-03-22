<template>
  <div class="f-flex f-flex-col">
    <p>Do tej pory zebrano {{collectedPointsIds.length}} punkty!</p>
    <p>Kod punktu</p>
    <m-input
      placeholder="Wpisz kod punktu..."
      v-model="collectedPointId"
    />
    <a-button-primary @click="collectPoint(collectedPointId)">
      Zbierz punkt
    </a-button-primary>
  </div>
</template>

<script>
import MInput from 'molecules/input';
import { mapManager } from 'utils/map-manager';
import { mapGetters } from 'vuex';
import AButtonPrimary from 'atoms/button/primary';
import { ROUTES } from 'utils/macros/routes';

export default {
  name: 'o-collect-point',
  components: {
    AButtonPrimary,
    MInput,
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
        .then(() => this.$router.push(ROUTES.start.path))
        .catch(errorMessage => {
          errorMessage.showMessage(`Niestety punkt o kodzie "${pointId}" już został zebrany.`);
        });
    },
  },
};
</script>
