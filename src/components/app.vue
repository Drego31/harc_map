<template>
  <div id="app">
    <o-header/>
    <div class="f-relative f-flex-1">
      <router-view/>
    </div>
    <o-menu/>
  </div>
</template>

<script>
import OHeader from 'organisms/header';
import OMenu from 'organisms/menu';

export default {
  components: {
    OMenu,
    OHeader,
  },
};
</script>
