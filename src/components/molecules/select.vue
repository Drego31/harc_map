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
        @keyup.esc.prevent="closeOptions"
        @keyup.enter.space.prevent="chooseAndToggleOptions"
        @keyup.up.prevent="optionUp"
        @keyup.down.prevent="optionDown"
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
    <div
      class="m-options"
      :class="{ 'f-top': optionsAreOutsideWindow }"
      v-if="optionsAreOpen"
      ref="options"
    >
      <div
        v-for="(option, index) of options"
        :key="option.value"
        class="a-option"
        :class="{ 'f-selected': option.value === vModel, 'f-pointed': pointedOption === index }"
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
import { logical } from 'vendors/logical';

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
    optionsAreOutsideWindow: false,
    pointedOption: -1,
  }),
  mounted () {
    const randomNumber = Math.floor(Math.random() * 10000);
    this.id = 'id-select-' + randomNumber;
    this.resetPointedOption();
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
    resetPointedOption (value = this.vModel) {
      if (logical.isNull(value)) {
        this.pointedOption = -1;
      } else {
        this.pointedOption = this.options.findIndex(option => option.value === value);
      }
    },
    focusAndToggle () {
      this.$refs.input.focus();
      this.toggleOptions();
    },
    closeOptions (config = { resetPointedOption: true }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.optionsAreOpen = false;
          if (config.resetPointedOption) {
            this.resetPointedOption();
          }
          resolve();
        });
      });
    },
    toggleOptions () {
      this.optionsAreOpen = this.optionsAreOpen === false;
      this.resetPointedOption();

      if (this.optionsAreOpen) {
        this.$nextTick(() => {
          const options = this.$refs.options;
          const optionsProps = options.getBoundingClientRect();
          const optionsHeight = optionsProps.height;
          const optionsTop = optionsProps.top;
          const windowHeight = window.outerHeight;
          this.optionsAreOutsideWindow = optionsHeight + optionsTop + 8 >= windowHeight;
        });
      } else {
        this.optionsAreOutsideWindow = false;
      }
    },
    chooseOption ({ value, index }) {
      if (logical.isDefined(index)) {
        value = this.options[index].value;
      }

      this.closeOptions({ resetPointedOption: false })
        .then(() => {
          this.$emit('change', value);
          this.vModel = value;
          this.resetPointedOption(value);
        });
    },
    chooseAndToggleOptions () {
      const index = this.pointedOption;
      if (this.optionsAreOpen && index >= 0) {
        this.chooseOption({ index });
      } else {
        this.toggleOptions();
      }
    },
    optionSwitch (index) {
      if (this.optionsAreOpen === false) {
        this.chooseOption({ index });
      }
    },
    optionUp () {
      if (this.pointedOption - 1 < 0) {
        this.pointedOption = this.options.length - 1;
      } else {
        this.pointedOption -= 1;
      }

      this.optionSwitch(this.pointedOption);
    },
    optionDown () {
      if (this.pointedOption + 1 > this.options.length - 1) {
        this.pointedOption = 0;
      } else {
        this.pointedOption += 1;
      }

      this.optionSwitch(this.pointedOption);
    },
  },
};
</script>
