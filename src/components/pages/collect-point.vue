<template>
  <t-page>
    <div class="f-pt-1 f-pb-4">
      {{ $t('page.collectPoint.content') }}
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
