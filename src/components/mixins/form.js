
export const formMixin = {
  data: () => ({
    _errors: [],
    message: '',
    isSending: false,
    blockForm: false,
  }),
  computed: {
    hasErrors () {
      return this._events.length > 0;
    },
  },
  methods: {
    onErrorOccurs (errorMessage) {
      console.error(errorMessage);
      this.message = errorMessage.message;
      this.isSending = false;
      this.blockForm = false;
    },
  },
};
