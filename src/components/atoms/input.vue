<template>
  <input class="a-input" v-model="vModel"/>
</template>

<script>
import { mixins } from 'components/mixins/base'

export default {
  name: 'a-input',
  mixins: [mixins.vModel],
}
</script>
