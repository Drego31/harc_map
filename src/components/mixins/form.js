import { translator } from 'src/dictionary';

export const formMixin = {
  data: () => ({
    _errors: [],
    isSending: false,
    blockForm: false,
    isServerError: false,
  }),
  methods: {
    onSuccessOccurs (message = translator.t('general.saved')) {
      this.isServerError = false;
      this.isSending = false;
      this.blockForm = false;
      this.showSuccessMessage(message);
    },
    showSuccessMessage (message = translator.t('general.saved')) {
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
