<template>
  <div>
    <transition name="fade">
      <div v-if="showSuccessMessage === false" class="m-banner-map">
        <div class="f-flex-1">
          <slot name="text"></slot>
        </div>
        <a-button-icon class="f-size-36" @click="$emit('cancel')">
          <a-icon
            class="f-text-danger"
            :name="ICONS.cancel"
            size="36"
          />
        </a-button-icon>
        <a-button-icon class="f-size-36" @click="$emit('actionTriggered')">
          <a-icon
            class="f-text-primary"
            :name="ICONS.check_circle"
            size="36"
          />
        </a-button-icon>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showSuccessMessage"
           class="m-banner-map f-message-success">
        <span class="f-text-center f-min-100">
          <slot name="success-message">
            {{ defaultSuccessMessage }}
          </slot>
        </span>
      </div>
    </transition>
  </div>
</template>
<script>
import { translator } from 'src/dictionary';
import AButtonIcon from 'atoms/button/icon';

export default {
  name: 'm-banner-map',
  components: { AButtonIcon },
  data: () => ({
    showSuccessMessage: false,
    defaultSuccessMessage: translator.t('features.bannerMap.defaultSuccessMessage'),
  }),
  props: {
    successMessageDuration: {
      type: Number,
      default: 2000,
    },
  },
  methods: {
    emitSuccessMessage () {
      return new Promise(resolve => {
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.showSuccessMessage = false;
          resolve();
        }, this.successMessageDuration);
      });
    },
  },
};
</script>

<style>
.min {
  min-width: 92px;
}
</style>
