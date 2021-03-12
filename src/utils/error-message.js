import { store } from 'store';

export class ErrorMessage extends Error {
  constructor (message, config = {}) {
    super(message);
    this.humanMessage = '';
    this.hard = config.hard || false;
  }

  showMessage (humanMessage = this.message) {
    this.humanMessage = humanMessage;
    store.dispatch('snackbar/open', {
      message: humanMessage,
      error: true,
    });
  }

  showMessageTemporary (humanMessage = this.message) {
    this.humanMessage = humanMessage;
    const config = {
      message: humanMessage,
      error: true,
    };
    if (this.hard) store.dispatch('snackbar/open', config);
    else store.dispatch('snackbar/openTemporary', config);
  }
}
