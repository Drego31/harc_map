<template>
  <div id="app">
    <o-header/>
    <div class="o-content">
      <router-view/>
    </div>
    <o-menu/>
  </div>
</template>

<script>
import OHeader from 'components/organisms/header'
import OMenu from 'components/organisms/menu'

export default {
  components: {
    OMenu,
    OHeader,
  },
}
</script>
