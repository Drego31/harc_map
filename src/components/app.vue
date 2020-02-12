<template>
  <div id="app">
    <o-header/>
    <div class="o-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import OHeader from 'components/organisms/header'

export default {
  components: {
    OHeader,
  },
  computed: {
    showCart () {
      // const route = this.$router.options.routes.find(item => item.name === this.$route.name)
      // return route.showCart
      return true
    },
  },
}
</script>
