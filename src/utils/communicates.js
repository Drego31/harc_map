import { store } from 'store';

export const communicates = {
  showSuccess (message) {
    store.dispatch('snackbar/open', {
      message,
      success: true,
    });
  },
  showError (message) {
    store.dispatch('snackbar/open', {
      message,
      error: true,
    });
  },
  showSuccessTemporary (message) {
    store.dispatch('snackbar/openTemporary', {
      message,
      success: true,
    });
  },
  showErrorTemporary (message) {
    store.dispatch('snackbar/openTemporary', {
      message,
      error: true,
    });
  },
}
