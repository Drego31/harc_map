export const formMixin = {
  methods: {
    setMessage (text) {
      return new Promise(resolve => {
        this.message = text
        setTimeout(() => {
          this.message = ''
          this.blockForm = false
          resolve()
        }, 2000)
      })
    },
    onError () {
      this.setMessage('Spróbuj ponownie...')
      this.isSending = false
    },
    onInvalidValues () {
      this.setMessage('Błędne dane')
      this.isSending = false
    },
  },
}
