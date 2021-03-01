<template>
  <div>
    <transition name="fade">
      <div v-if="isOpen" class="m-snackbar">
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
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import AIcon from 'atoms/icon';

export default {
  name: 'm-snackbar',
  components: { AIcon },
  computed: {
    ...mapGetters('snackbar', [
      'isOpen',
      'message',
    ]),
  },
  methods: {
    ...mapMutations('snackbar', [
      'close',
    ]),
  },
};
</script>
