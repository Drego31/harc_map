<template>
  <div id="app">
    <o-header/>
    <div class="f-relative f-flex-1">
      <router-view :key="routerId"/>
    </div>
    <o-footer/>
    <o-menu/>
    <div
      class="a-cover f-menu"
      :class="isOpen ? 'f-show' : ''"
      @click="close"
    />
    <o-popup/>
    <m-snackbar/>
    <o-guide/>
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
import { mapGetters, mapMutations } from 'vuex';
import OPopup from 'organisms/popup';
import MSnackbar from 'molecules/snackbar';
import OGuide from 'organisms/guide';

export default {
  components: {
    OGuide,
    MSnackbar,
    OPopup,
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
    ...mapGetters('menu', [
      'isOpen',
    ]),
  },
  methods: {
    ...mapMutations('menu', [
      'close',
    ]),
  },
};
</script>
