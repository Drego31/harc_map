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
          label: 'Edytuj',
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
    copyToClipboard (key) {
      function copyToClipboard (node) {
        const r = document.createRange();
        r.selectNode(node);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
      }

      const element = this.$refs.toCopy[key];
      copyToClipboard(element);
      this.$store.dispatch('snackbar/openTemporary', {
        message: 'Copied to clipboard!',
      });
      this.popup.hide();
    },
  },
};
</script>
