<template>
  <div id="app">
    <o-header/>
    <div class="f-relative f-flex-1">
      <router-view/>
    </div>
    <o-footer/>
    <o-menu/>
  </div>
</template>

<script>
import OHeader from 'organisms/header';
import OMenu from 'organisms/menu';
import OFooter from 'organisms/footer';

export default {
  components: {
    OFooter,
    OMenu,
    OHeader,
  },
};
</script>
