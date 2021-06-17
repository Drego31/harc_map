import { store } from 'store';

function open (...params) {
  store.dispatch('snackbar/open', ...params);
}

function openTemporary (...params) {
  store.dispatch('snackbar/openTemporary', ...params);
}

export const communicates = {
  showMessage (message) {
    open({ message });
  },
  showSuccess (message) {
    open({ message, success: true });
  },
  showError (message) {
    open({ message, error: true });
  },
  showMessageTemporary (message) {
    openTemporary({ message });
  },
  showSuccessTemporary (message) {
    openTemporary({ message, success: true });
  },
  showErrorTemporary (message) {
    openTemporary({ message, error: true });
  },
};
