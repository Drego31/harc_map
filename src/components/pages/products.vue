<template>
  <t-page class="p-products">
    <m-article
      v-for="(single, key) in list"
      :key="key"
      v-bind="single"
    />
  </t-page>
</template>

<script>
import TPage from 'components/templates/page'
import MArticle from 'components/molecules/article'
import { mapState } from 'vuex'

export default {
  name: 'p-products',
  components: {
    MArticle,
    TPage,
  },
  computed: {
    ...mapState('products', ['list']),
  },
}
</script>
