<template>
  <t-page>
    <div class="a-title">Logowanie</div>
    <div class="f-pb-1">
      <a-input placeholder="e-mail" />
      <a-input placeholder="hasło" />
      <a-button>Dalej</a-button>
    </div>
    <a-button>Przypomnij hasło</a-button>
    <a-button>Zarejestruj</a-button>
  </t-page>
</template>

<script>
import TPage from 'templates/page'
import AInput from 'atoms/input'
import AButton from 'atoms/button'

export default {
  name: 'p-sign-in',
  components: {
    AButton,
    AInput,
    TPage,
  },
}
</script>
