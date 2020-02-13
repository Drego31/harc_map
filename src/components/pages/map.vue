<template>
  <t-page class="f-map">
    <o-map/>
  </t-page>
</template>

<script>
import TPage from 'components/templates/page'
import OMap from 'components/organisms/map'

export default {
  name: 'p-map',
  components: {
    OMap,
    TPage,
  },
}
</script>
