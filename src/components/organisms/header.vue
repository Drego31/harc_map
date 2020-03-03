<template>
  <div class="o-header">
    <div class="a-subtitle">
      {{pageTitle}}
    </div>
    <div class="a-logo">
      HARCMAP
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'o-header',
  computed: {
    ...mapGetters('user', [
      'isLogin',
    ]),
    ...mapGetters('menu', [
      'pageTitle',
    ]),
  },
  methods: {
    ...mapMutations('menu', [
      'toggle',
    ]),
  },
};
</script>
