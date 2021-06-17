import { ErrorMessage } from 'utils/error-message';
import { API_ERRORS, API_WARNS } from 'utils/macros/errors';
import { logical } from 'vendors/logical';
import { WarnMessage } from 'utils/warn-message';
import { translator } from 'src/dictionary';
import { store } from 'store';
import router from 'src/router';
import { ROUTES } from 'utils/macros/routes';
import validateCodes from 'validateCodes';

/**
 * @param errors - example:
 *   errors: [
 *     [
 *       [errorCode11, errorCode12],
 *       errorMessage1,
 *     ],
 *     [errorCode2, errorMessage2],
 *   ],
 */
export const apiResponseService = {
  takeOverResponse ({
    response,
    onSuccess = requireMethod('onSuccess'),
    onError = requireMethod('onError'),
    errors = [],
    warns = [],
    defaultError = API_ERRORS.undefined.defaultError,
    defaultWarn = API_WARNS.undefined.defaultWarn,
  }) {
    response.json().then(data => {
      if (this.hasWarn(data)) {
        catchWarn({
          data,
          warns,
          defaultWarn,
        });
      }
      if (this.hasNoError(data)) {
        delete data.error;
        delete data.warn;
        onSuccess(data);
      } else {
        catchError({
          data,
          onError,
          errors,
          defaultError,
        });
      }
    });
  },
  catchConnectionError (reject) {
    return function () {
      reject(translator.t('apiError.general.notOnline'));
    };
  },
  hasNoError (data) {
    return logical.isNull(data.error);
  },
  hasWarn (data) {
    return logical.isNotNull(data.warn);
  },
};

function requireMethod (methodName) {
  return () => {
    throw new ErrorMessage(methodName + ' method required');
  };
}

function catchWarn ({ data, warns = [], defaultWarn }) {
  let warnMessage = defaultWarn;
  for (const [codes, message] of warns) {
    for (const singleCode of codes) {
      if (data.warn === singleCode) {
        warnMessage = message;
        break;
      }
    }
  }
  (new WarnMessage(warnMessage)).showMessage();
}

function catchError ({ data, errors = [], onError, defaultErrorMessage }) {
  let errorMessage = defaultErrorMessage;
  for (const [codes, message] of errors) {
    for (const singleCode of codes) {
      if (data.error === singleCode) {
        errorMessage = message;
        break;
      }
    }
  }
  if (data.error === validateCodes.UNAUTHORIZED_ACCESS) {
    store.commit('user/signOut');
    router.push(ROUTES.welcome.path);
    errorMessage = translator.t('apiError.general.unauthorizedAccess');
  }
  onError(new ErrorMessage(errorMessage, { code: data.error }));
}
