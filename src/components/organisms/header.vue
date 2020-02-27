<template>
  <div class="o-header">
    <a-button-icon
      @click="toggle()"
      v-if="isLogin"
    >
      <icon-map :size="32"/>
    </a-button-icon>
    <div class="a-logo f-flex-1">
      HarcMap
    </div>
    <a-button @click="collectPoint('1')">
      collect point
    </a-button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import IconMap from 'icons/Menu.vue';
import AButtonIcon from 'atoms/button/icon';
import AButton from 'atoms/button';
import { mapManager } from 'utils/map-manager';

export default {
  name: 'o-header',
  components: {
    AButton,
    AButtonIcon,
    IconMap,
  },
  computed: {
    ...mapGetters('user', [
      'isLogin',
    ]),
  },
  methods: {
    ...mapMutations('menu', [
      'toggle',
    ]),
    collectPoint (pointId) {
      mapManager.collectPoint(pointId)
        .catch(errorMessage => {
          errorMessage.showMessage(`Niestety punkt o kodzie "${pointId}" już został zebrany.`);
        });
    },
  },
};
</script>
