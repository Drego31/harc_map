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
      :class="{ 'f-error': error }"
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

export default {
  name: 'm-input',
  mixins: [mixins.vModel],
  components: {
    IconEye,
    IconEyeOff,
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
