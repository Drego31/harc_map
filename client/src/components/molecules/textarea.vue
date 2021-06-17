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
    <a-icon
      :name="ICONS.warning"
      v-if="error"
      class="f-input f-error"
    />
    <a-icon
      :name="ICONS.check"
      v-if="correct && error === false"
      class="f-input f-correct"
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

export default {
  name: 'm-textarea',
  mixins: [mixins.vModel],
  components: {
    MResizeAuto,
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
