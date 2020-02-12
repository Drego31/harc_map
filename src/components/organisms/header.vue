<template>
  <div class="o-header">
    <a-button-icon/>
    <div>
      <div class="a-logo">
        LOGO
      </div>
    </div>
  </div>
</template>

<script>
import AButtonIcon from 'components/atoms/button/icon'
export default {
  name: 'o-header',
  components: { AButtonIcon },
  methods: {
    isSelected (route) {
      const currentPath = this.$route.path
      return currentPath === route.path ? 'f-selected' : ''
    },
  },
}
</script>
