import { translator } from 'src/dictionary';
import { communicates } from 'utils/communicates';
import { ErrorMessage } from 'utils/error-message';

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
      communicates.showSuccessTemporary(message);
    },
    onErrorOccurs (errorMessage) {
      this.isServerError = true;
      this.isSending = false;
      this.blockForm = false;
      if (errorMessage instanceof ErrorMessage) errorMessage.showMessageTemporary();
      else communicates.showErrorTemporary(errorMessage);
    },
  },
};
