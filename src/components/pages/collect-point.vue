<template>
  <t-page title="Zbierz punkt">
    <div class="f-pt-1 f-pb-4">
      Aby zebrać punkty udaj się do miejsc oznaczonych na mapie
      i wpisz kod z koperty do poniższego pola tekstowego.
      Następnie wciśnij przycisk „Dalej”.
    </div>
    <o-form-collect-point/>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OFormCollectPoint from 'organisms/form/collect-point';

export default {
  name: 'p-collect-point',
  components: {
    OFormCollectPoint,
    TPage,
  },
};
</script>
