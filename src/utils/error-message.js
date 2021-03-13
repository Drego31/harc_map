import { communicates } from 'utils/communicates';

export class ErrorMessage extends Error {
  constructor (message, config = { hard: false }) {
    super(message);
    this.humanMessage = '';
    this.hard = config.hard;
  }

  showMessage (humanMessage = this.message) {
    this.humanMessage = humanMessage;
    communicates.showError(humanMessage);
  }

  showMessageTemporary (humanMessage = this.message) {
    this.humanMessage = humanMessage;
    if (this.hard) communicates.showError(humanMessage);
    else communicates.showErrorTemporary(humanMessage);
  }
}
