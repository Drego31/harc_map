<template>
  <t-page>
    <form>
      <h1>Sign Up:</h1>
      <p>Patrol name: {{patrolName}}</p>
      <a-input
        v-model="patrolName"
        placeholder="Type patrol name"
      />
      <p>Email: {{ email }}</p>
      <a-input
        v-model="email"
        placeholder="Type your email"
      />
      <p>Password: {{ password }}</p>
      <a-input
        v-model="password"
        placeholder="Type your password"
      />
      <p>Repeat password: {{ passwordRepeat }}</p>
      <a-input
        v-model="passwordRepeat"
        placeholder="Repeat your password"
      />
      <a-button> Wyślij </a-button>
      <a-button> Wróć</a-button>
      <router-link to="/">Back</router-link>
    </form>
  </t-page>
</template>

<script>
import TPage from 'components/templates/page'
import AInput from 'components/atoms/input'
import AButton from '../atoms/button'

export default {
  name: 'p-sign-up',
  components: {
    AButton,
    AInput,
    TPage,
  },
  data: () => ({
    email: '',
    patrolName: '',
    password: '',
    passwordRepeat: '',
  }),
}
</script>
