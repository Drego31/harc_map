<template>
  <div ref="mapPopup" class="o-popup f-map">
    <a-icon-close-popup
      add-class="f-map"
      :size="20"
      @click="popup.hide()"
    />
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
        class="f-flex-1 f-pl-1 f-py-1"
        ref="toCopy"
      >
        {{ singleData.value }}
      </div>
    </div>
    <div
      v-for="[key, button] of buttons.entries()"
      :key="'popup-map-button-' + key"
      @click="button.method(data.entries())"
      class="m-list-element f-popup"
    >
      <a-icon
        class="a-icon f-list"
        :name="button.icon"
        :size="20"
      />
      <div class="f-flex-1 f-pl-1  f-py-1">
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
import AIconClosePopup from 'atoms/icon/close-popup';
import { translator } from 'src/dictionary';
import { communicates } from 'utils/communicates';

export default {
  name: 'o-popup-map',
  components: {
    AIconClosePopup,
    AIcon,
  },
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
          method: () => {
            this.$router.push({
              name: this.ROUTES.editPoint.name,
              params: { pointId: this.$store.getters['mapPopup/pointId'] },
            });
          },
        },
        {
          icon: this.ICONS.delete,
          label: this.$t('general.remove'),
          method: () => {
            communicates.showSuccess('Trwa usuwanie punktu...');
            this.popup.hide();
            this.$store.dispatch('event/removePoint', this.$store.getters['mapPopup/pointId'])
              .then(() => communicates.showSuccessTemporary(translator.t('communicate.map.pointRemoved')))
              .catch(em => em.showMessage());
          },
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
      communicates.showSuccessTemporary(this.$t('general.copied'));
      this.popup.hide();
    },
  },
  beforeDestroy () {
    this.popup.destroy();
  },
};
</script>
