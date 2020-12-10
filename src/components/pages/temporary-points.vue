<template>
  <t-page>
    <o-temporary-points/>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OTemporaryPoints from 'organisms/temporary-points';

export default {
  name: 'p-collected-points',
  components: {
    TPage,
    OTemporaryPoints,
  },
};
</script>
