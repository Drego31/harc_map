<template>
  <div class="m-input">
    <input
      :id="id"
      class="a-field"
      :class="additionalClasses"
      :type="getType"
      :disabled="disabled"
      v-model="vModel"
    />
    <label
      class="a-label f-field"
      :class="{ 'f-correct': correct, 'f-error': error }"
      :for="id"
    >
      {{ placeholder }}
    </label>
    <a-icon
      :name="ICONS.visibility"
      v-if="isPassword && showPassword === false"
      class="f-input"
      @click="showPassword = true"
    />
    <a-icon
      :name="ICONS.visibility_off"
      v-if="isPassword && showPassword"
      class="f-input"
      @click="showPassword = false"
    />
    <a-icon
      :name="ICONS.warning"
      v-if="error && isPassword === false"
      class="f-input f-error"
    />
    <a-icon
      :name="ICONS.check"
      v-if="correct && isPassword === false && error === false"
      class="f-input f-correct"
    />
    <div
      class="a-assist"
      :class="{ 'f-error': error, 'f-disabled': disabled}"
    >
      {{ assist }}
    </div>
  </div>
</template>

<script>
import { mixins } from 'mixins/base';

export default {
  name: 'm-input',
  mixins: [mixins.vModel],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
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
        'f-disabled': this.disabled,
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
