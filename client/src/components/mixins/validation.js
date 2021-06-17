export const validationMixin = {
  data: () => ({
    rules: { // based on vee-validate rules
      email: 'required|email',
      password: 'required|min:8|max:64|hasNumber|hasCapitalize',
      passwordConfirmation: 'required|confirmed:password',
      userTeam: 'required|min:4',
      eventId: 'required|length:4',
      pointId: 'required|length:4',
      required: 'required',
      name: 'max:128',
      date: 'required',
    },
  }),
};
