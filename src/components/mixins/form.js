export const formMixin = {
  data: () => ({
    _errors: [],
  }),
  methods: {
    setMessage (text) {
      return new Promise(resolve => {
        this.message = text;
        setTimeout(() => {
          this.message = '';
          this.blockForm = false;
          resolve();
        }, 1500);
      });
    },
    onError (error) {
      console.error(error);
      this.setMessage('Spróbuj ponownie...');
      this.isSending = false;
    },
    onInvalidValues () {
      this.setMessage('Błędne dane');
      this.isSending = false;
    },
  },
};
