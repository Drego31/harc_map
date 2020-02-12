<template>
  <t-page>
    <div>
      {{this.user}}
      <h1>Sign Up:</h1>
      <p>Patrol name: {{user.patrolName}}</p>
      <a-input
        v-model="user.patrolName"
        placeholder="Type patrol name"
      />
      <p>Email: {{ user.email }}</p>
      <a-input
        v-model="user.email"
        placeholder="Type your email"
      />
      <p>Password: {{ user.password }}</p>
      <a-input
        v-model="user.password"
        placeholder="Type your password"
      />
      <p>Repeat password: {{ passwordRepeat }}</p>
      <a-input
        v-model="passwordRepeat"
        placeholder="Repeat your password"
      />
      <a-button @click="addNewUser(this.user)" class="f-40">
        Create account
      </a-button>
      <router-link to="/">
        <a-button class="f-40">
          Back to log in
        </a-button>
      </router-link>
    </div>
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
    user: {
      email: '',
      patrolName: '',
      password: '',
    },
    passwordRepeat: '',
  }),
  methods: {
    addNewUser (user) {
      console.log(user)
    },
  },
}
</script>
