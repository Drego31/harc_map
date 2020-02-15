<template>
  <t-page>
    <div class="a-title">Logowanie</div>
    <o-form-sign-in/>
    <a-button>Przypomnij hasło</a-button>
    <a-button>Zarejestruj</a-button>
  </t-page>
</template>

<script>
import TPage from 'templates/page'
import OFormSignIn from 'organisms/form/sign-in'
import AButton from 'atoms/button'

export default {
  name: 'p-sign-in',
  components: {
    AButton,
    OFormSignIn,
    TPage,
  },
}
</script>
