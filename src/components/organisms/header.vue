<template>
  <div class="o-header">
    <a-button-icon @click="toggle()">
      <icon-map :size="32"/>
    </a-button-icon>
    <div class="a-logo f-flex-1">
      HarcMap
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import IconMap from 'icons/Menu.vue'
import AButtonIcon from 'components/atoms/button/icon'

export default {
  name: 'o-header',
  components: { AButtonIcon, IconMap },
  methods: {
    ...mapMutations('menu', [
      'toggle',
    ]),
  },
}
</script>
