export class WarnMessage {
  constructor (message) {
    this.message = message;
  }

  showMessage () {
    alert(this.message);
  }
}
