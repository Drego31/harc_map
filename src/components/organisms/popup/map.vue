<template>
  <div ref="mapPopup" class="o-popup f-map">
    <div
      v-for="singleData of data"
      :key="singleData.value"
      class="f-flex"
    >
      <a-icon :name="singleData.icon"/>
      <div class="f-flex-1 f-pl-1 f-text-gray">
        {{ singleData.value }}
      </div>
    </div>
    <div
      v-for="button of buttons"
      :key="button.label"
      @click="button.method()"
      class="f-flex"
    >
      <a-icon :name="button.icon"/>
      <div class="f-flex-1 f-pl-1">
        {{ button.label }}
      </div>
    </div>
  </div>
</template>

<script>
import AIcon from 'atoms/icon';
import { Popup } from 'map/popup';
import { mapGetters } from 'vuex';

export default {
  name: 'o-popup-map',
  components: { AIcon },
  data: () => ({
    popup: null,
  }),
  computed: {
    ...mapGetters('mapPopup', [
      'data',
    ]),
    buttons () {
      return [
        {
          icon: this.ICONS.edit,
          label: 'Edycja',
          method: () => this.$router.push(this.ROUTES.adminPanel),
        },
        {
          icon: this.ICONS.close,
          label: 'Ukryj',
          method: () => this.popup.hide(),
        },
      ];
    },
  },
  methods: {
    definePopup () {
      this.popup = new Popup({
        container: this.$refs.mapPopup,
      });
    },
  },
};
</script>
