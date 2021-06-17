<template>
  <transition name="fade">
    <div v-if="isOpen" class="m-snackbar" :class="colorClasses">
      <div class="f-flex-1 f-p-2">
        {{ message }}
      </div>
      <div @click="close">
        <a-icon
          class="a-icon f-snackbar"
          :name="ICONS.close"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'm-snackbar',
  computed: {
    ...mapGetters('snackbar', [
      'isOpen',
      'message',
      'error',
      'success',
    ]),
    colorClasses () {
      if (this.error) return 'f-error';
      if (this.success) return 'f-success';
      else return '';
    },
  },
  methods: {
    ...mapMutations('snackbar', [
      'close',
    ]),
  },
};
</script>
