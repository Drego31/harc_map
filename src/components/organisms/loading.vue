<template>
  <div class="o-loading">
    <a-loader additional-class="f-big"/>
  </div>
</template>

<script>
import ALoader from 'atoms/loader';

export default {
  name: 'o-loading',
  components: { ALoader },
};
</script>
