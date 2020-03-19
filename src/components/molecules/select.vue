<template>
  <div class="m-input f-relative">
    <div
      class="a-field f-select"
      :class="additionalClasses"
      @click="toggleOptions"
      v-click-outside="closeOptions"
    >
      <input
        :id="id"
        class="a-input f-select"
        :class="additionalClasses"
        ref="input"
        :value="label"
        readonly
        @focusout="closeOptions"
        @keyup.space="toggleOptions"
      />
    </div>
    <label
      class="a-label f-field"
      :for="id"
      :class="{ 'f-correct': correct, 'f-error': error }"
    >
      {{ placeholder }}
    </label>
    <icon-cancel
      class="a-icon f-input"
      :size="26"
      @click.stop="focusAndToggle"
    />
    <div class="m-options" v-if="optionsAreOpen">
      <div
        v-for="option of options"
        :key="option.value"
        class="a-option"
        :class="{ 'f-selected': option.value === vModel }"
        @click="chooseOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script>
import { mixins } from 'mixins/base';
import IconCancel from 'icons/ArrowDown';

export default {
  name: 'm-select',
  components: { IconCancel },
  mixins: [mixins.vModel],
  props: {
    /**
     * options: [{label: String, value: String}]
     */
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
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
  },
  data: () => ({
    id: '',
    optionsAreOpen: false,
  }),
  mounted () {
    const randomNumber = Math.floor(Math.random() * 10000);
    this.id = 'id-select-' + randomNumber;
  },
  computed: {
    label () {
      const option = this.options.find(option => (option.value === this.vModel));
      return option ? option.label : '';
    },
    additionalClasses () {
      return {
        'f-filled': this.label !== '',
        'f-error': this.error,
        'f-correct': this.correct,
      };
    },
  },
  methods: {
    focusAndToggle () {
      this.$refs.input.focus();
      this.toggleOptions();
    },
    closeOptions () {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.optionsAreOpen = false;
          resolve();
        });
      });
    },
    toggleOptions () {
      this.optionsAreOpen = this.optionsAreOpen === false;
    },
    chooseOption ({ value }) {
      this.closeOptions()
        .then(() => {
          this.$emit('change', value);
          this.vModel = value;
        });
    },
  },
};
</script>
