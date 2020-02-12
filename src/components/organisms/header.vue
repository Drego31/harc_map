<template>
  <div class="o-header">
    <a-button-icon>
      <icon-map :size="32"/>
    </a-button-icon>
    <div class="a-logo f-flex-1">
      HarcMap
    </div>
  </div>
</template>

<script>
import IconMap from 'icons/Menu.vue'
import AButtonIcon from 'components/atoms/button/icon'

export default {
  name: 'o-header',
  components: { AButtonIcon, IconMap },
  methods: {
    isSelected (route) {
      const currentPath = this.$route.path
      return currentPath === route.path ? 'f-selected' : ''
    },
  },
}
</script>
