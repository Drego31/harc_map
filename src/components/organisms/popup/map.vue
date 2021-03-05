<template>
  <div ref="mapPopup" class="o-popup f-map">
    <div
      v-for="[key, singleData] of data.entries()"
      :key="'popup-map-data-' + key"
      @click="copyToClipboard(key)"
      class="m-list-element f-popup"
    >
      <a-icon
        class="a-icon f-list"
        :name="singleData.icon"
        :size="20"
      />
      <div
        class="f-flex-1 f-pl-1"
        ref="toCopy"
      >
        {{ singleData.value }}
      </div>
    </div>
    <div
      v-for="[key, button] of buttons.entries()"
      :key="'popup-map-button-' + key"
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
import { actionUtils } from 'utils/action';

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
          label: this.$t('general.edit'),
          method: () => this.$router.push(this.ROUTES.adminPanel),
        },
        {
          icon: this.ICONS.close,
          label: this.$t('general.hide'),
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
    copyToClipboard (key) {
      const element = this.$refs.toCopy[key];
      actionUtils.copyToClipboard(element);
      this.$store.dispatch('snackbar/openTemporary', {
        message: this.$t('general.copied'),
      });
      this.popup.hide();
    },
  },
  beforeDestroy () {
    this.popup.destroy();
  },
};
</script>