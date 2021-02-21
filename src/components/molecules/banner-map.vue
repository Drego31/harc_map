<template>
  <div>
    <transition name="fade">
      <div v-if="showSuccessMessage === false" class="m-banner-map">
        <div class="f-flex-1">
          <slot name="text"></slot>
        </div>
        <a-button-primary
          class="f-flex-0 f-m-0"
          :add-class="'min'"
          @click="$emit('actionTriggered')"
        >
          <slot name="button-name"></slot>
        </a-button-primary>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showSuccessMessage"
           class="m-banner-map f-message-success">
        <span class="f-text-center">
          <slot name="success-message">
            Nowa pozycja została zapisana.
          </slot>
        </span>
      </div>
    </transition>
  </div>
</template>

<script>
import AButtonPrimary from 'atoms/button/primary';

export default {
  name: 'm-banner-map',
  components: { AButtonPrimary },
  data: () => ({
    showSuccessMessage: false,
  }),
  props: {
    successMessageDuration: {
      type: Number,
      default: 1500,
    },
  },
  methods: {
    emitSuccessMessage () {
      this.showSuccessMessage = true;
      window.setTimeout(() => {
        this.showSuccessMessage = false;
      }, this.successMessageDuration);
    },
  },
};
</script>

<style>
.min {
  min-width: 92px;
}
</style>
