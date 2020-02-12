<template>
  <t-page>
    sign up
    <router-link to="/">Back</router-link>
    <div>
      name: {{ name }}
    </div>
    <div>
      <a-input
        v-model="name"
        placeholder="Type name"
      />
    </div>
  </t-page>
</template>

<script>
import TPage from 'components/templates/page'
import AInput from 'components/atoms/input'

export default {
  name: 'p-sign-up',
  components: {
    AInput,
    TPage,
  },
  data: () => ({
    name: '',
  }),
}
</script>
