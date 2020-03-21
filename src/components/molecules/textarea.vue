<template>
  <div class="m-input">
    <m-resize-auto>
      <template v-slot:default="{resize}">
        <textarea
          :id="id"
          class="a-field f-textarea"
          :class="additionalClasses"
          :type="getType"
          @input="resize"
          v-model="vModel"
        />
      </template>
    </m-resize-auto>
    <label
      class="a-label f-field"
      :class="{ 'f-correct': correct, 'f-error': error }"
      :for="id"
    >
      {{ placeholder }}
    </label>
    <icon-alert
      v-if="error"
      class="a-icon f-input f-error"
      :size="26"
    />
    <icon-check-bold
      v-if="correct && error === false"
      class="a-icon f-input f-correct"
      :size="26"
    />
    <div
      class="a-assist"
      :class="{ 'f-error': error }"
    >
      {{ assist }}
    </div>
  </div>
</template>

<script>
import { mixins } from 'mixins/base';
import MResizeAuto from 'molecules/resize-auto';
import IconAlert from 'icons/Alert';
import IconCheckBold from 'icons/CheckBold';

export default {
  name: 'm-textarea',
  mixins: [mixins.vModel],
  components: {
    MResizeAuto,
    IconAlert,
    IconCheckBold,
  },
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
    correct: {
      type: Boolean,
      default: false,
    },
    assist: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    id: '',
    showPassword: false,
  }),
  mounted () {
    const randomNumber = Math.floor(Math.random() * 10000);
    this.id = 'id-input-' + randomNumber;
  },
  computed: {
    isPassword () {
      return this.type === 'password';
    },
    additionalClasses () {
      return {
        'f-filled': this.vModel !== '',
        'f-error': this.error,
        'f-correct': this.correct,
        'f-icon': this.error || this.isPassword,
      };
    },
    getType () {
      if (this.isPassword) {
        return this.showPassword ? '' : this.type;
      } else {
        return this.type;
      }
    },
  },
};
</script>
