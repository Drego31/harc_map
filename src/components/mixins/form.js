
export const formMixin = {
  data: () => ({
    _errors: [],
    message: '',
    isSending: false,
    blockForm: false,
    isServerError: false,
  }),
  methods: {
    onErrorOccurs (errorMessage) {
      console.error(errorMessage);
      this.isServerError = true;
      this.message = errorMessage.message;
      this.isSending = false;
      this.blockForm = false;
    },
  },
};
