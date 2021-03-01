<template>
  <div ref="mapPopup" class="o-popup f-map">
    <div
      @click="$router.push(ROUTES.adminPanel)"
      class="f-flex"
    >
      <a-icon :name="ICONS.edit"/>
      <div class="f-flex-1 f-pl-1">
        Edycja
      </div>
    </div>
    <div
      @click="popup.hide()"
      class="f-flex"
    >
      <a-icon :name="ICONS.close"/>
      <div class="f-flex-1 f-pl-1">
        Ukryj
      </div>
    </div>
  </div>
</template>

<script>
import AIcon from 'atoms/icon';
import { Popup } from 'map/popup';

export default {
  name: 'o-popup-map',
  components: { AIcon },
  data: () => ({
    popup: null,
  }),
  methods: {
    definePopup () {
      this.popup = new Popup({
        container: this.$refs.mapPopup,
      });
    },
  },
};
</script>
