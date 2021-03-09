import { ErrorMessage } from 'utils/error-message';
import { API_ERRORS, API_WARNS } from 'utils/macros/errors';
import { logical } from 'vendors/logical';
import { WarnMessage } from 'utils/warn-message';

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
    return function (fetchError) {
      reject(new ErrorMessage(fetchError));
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
    throw new Error(methodName + ' method required');
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

function catchError ({ data, errors = [], onError, defaultError }) {
  let errorMessage = defaultError;
  for (const [codes, message] of errors) {
    for (const singleCode of codes) {
      if (data.error === singleCode) {
        errorMessage = message;
        break;
      }
    }
  }
  onError(new ErrorMessage(errorMessage));
}
