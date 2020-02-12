<template>
  <t-page>
    sign in
    <router-link to="/sign-up">Sign up</router-link>
    <router-link to="/map">Map</router-link>
  </t-page>
</template>

<script>
import TPage from 'components/templates/page'

export default {
  name: 'p-sign-in',
  components: {
    TPage,
  },
}
</script>
