<template>
  <div class="m-input">
    <input
      :id="id"
      class="a-input"
      :class="additionalClasses"
      :type="getType"
      v-model="vModel"
    />
    <label
      class="a-label f-input"
      :class="{ 'f-correct': correct, 'f-error': error }"
      :for="id"
    >
      {{ placeholder }}
    </label>
    <icon-eye
      v-if="isPassword && showPassword === false"
      class="a-icon f-input"
      :size="26"
      @click="showPassword = true"
    />
    <icon-eye-off
      v-if="isPassword && showPassword"
      class="a-icon f-input"
      :size="26"
      @click="showPassword = false"
    />
    <icon-alert
      v-if="error && isPassword === false"
      class="a-icon f-input f-error"
      :size="26"
    />
    <icon-check-bold
      v-if="correct && isPassword === false && error === false"
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
import IconEye from 'icons/Eye';
import IconEyeOff from 'icons/EyeOff';
import IconAlert from 'icons/Alert';
import IconCheckBold from 'icons/CheckBold';

export default {
  name: 'm-input',
  mixins: [mixins.vModel],
  components: {
    IconEye,
    IconEyeOff,
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
