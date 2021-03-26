import { communicates } from 'utils/communicates';

export class ErrorMessage extends Error {
  constructor (message, details = { code: undefined, hard: false }) {
    super(message);
    this.humanMessage = '';
    this.hard = details.hard;
    this.code = details.code;
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
