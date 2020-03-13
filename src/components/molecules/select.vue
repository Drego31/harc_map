<template>
  <div class="m-input f-relative">
    <div class="a-input-new">
      <div>
        <input
          :id="id"
          :placeholder="label"
        />
        <label
          class="a-label f-input"
          :for="id"
        >
          {{ placeholder }}
        </label>
      </div>
      <div>
        <icon-cancel/>
      </div>
    </div>
    <div>
      <div
        v-for="option of options"
        :key="option.value"
        @click="chooseOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
  <!--  <select-->
  <!--    class="a-select"-->
  <!--    v-model="vModel"-->
  <!--    @change="$emit('change')"-->
  <!--  >-->
  <!--    <option-->
  <!--      v-for="option of options"-->
  <!--      :value="option.value"-->
  <!--    >-->
  <!--      {{ option.label }}-->
  <!--    </option>-->
  <!--  </select>-->
</template>

<script>
import { mixins } from 'mixins/base';
import IconCancel from 'icons/Cancel';

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
  },
  data: () => ({
    id: '',
  }),
  mounted () {
    const randomNumber = Math.floor(Math.random() * 10000);
    this.id = 'id-select-' + randomNumber;
  },
  computed: {
    label () {
      return this.options.find(option => (option.value === this.vModel)).label;
    },
  },
  methods: {
    chooseOption ({ value }) {
      console.log(value);
      this.vModel = value;
      this.$emit('change', value);
    },
  },
};
</script>
