<template>
  <div ref="mapPopup" class="o-popup f-map">
    <div
      v-for="singleData of data"
      :key="singleData.value"
      class="m-list-element f-popup"
    >
      <a-icon
        class="a-icon f-list"
        :name="singleData.icon"
        :size="20"
      />
      <div class="f-flex-1 f-pl-1">
        {{ singleData.value }}
      </div>
    </div>
    <div
      v-for="button of buttons"
      :key="button.label"
      @click="button.method()"
      class="m-list-element f-popup"
    >
      <a-icon
        class="a-icon f-list"
        :name="button.icon"
        :size="20"
      />
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
