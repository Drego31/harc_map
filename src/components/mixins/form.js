
export const formMixin = {
  data: () => ({
    _errors: [],
    isSending: false,
    blockForm: false,
    isServerError: false,
  }),
  methods: {
    showSuccessMessage (message) {
      this.$store.dispatch('snackbar/openTemporary', {
        message: message,
        success: true,
      });
    },
    onErrorOccurs (errorMessage) {
      this.isServerError = true;
      this.$store.dispatch('snackbar/openTemporary', {
        message: errorMessage.message,
        error: true,
      });
      this.isSending = false;
      this.blockForm = false;
    },
  },
};
