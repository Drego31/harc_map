<template>
  <div>
    <a-button @click="collectPoint('1')">
      Zbierz punkt
    </a-button>
  </div>
</template>

<script>
import AButton from 'atoms/button';
import { mapManager } from 'utils/map-manager';

export default {
  name: 'o-collect-point',
  components: {
    AButton,
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
