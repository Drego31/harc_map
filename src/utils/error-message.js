import { store } from 'store';

export class ErrorMessage extends Error {
  constructor (...params) {
    super(...params);
    this.humanMessage = '';
  }

  showMessage (humanMessage = this.message) {
    this.humanMessage = humanMessage;
    store.dispatch('snackbar/open', {
      message: humanMessage,
      error: true,
    });
  }
}
