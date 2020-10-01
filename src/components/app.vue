<template>
  <div id="app">
    <o-header/>
    <div class="f-relative f-flex-1">
      <router-view :key="routerId"/>
    </div>
    <o-footer/>
    <o-menu/>
    <transition name="fade">
      <o-loading v-show="isLoading"/>
    </transition>
  </div>
</template>

<script>
import OHeader from 'organisms/header';
import OMenu from 'organisms/menu';
import OFooter from 'organisms/footer';
import OLoading from 'organisms/loading';
import { mapGetters } from 'vuex';

export default {
  components: {
    OHeader,
    OMenu,
    OFooter,
    OLoading,
  },
  computed: {
    ...mapGetters([
      'isLoading',
      'routerId',
    ]),
  },
};
</script>
