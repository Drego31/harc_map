import { ErrorMessage } from 'utils/error-message';
import { ERRORS } from 'utils/macros/errors';
import { logical } from 'vendors/logical';

/**
 * @param errors - example:
 *   errors: [
 *     [errorCode1, errorMessage1],
 *     [errorCode2, errorMessage2],
 *   ],
 */
export const apiResponseService = {
  takeOverResponse ({
    response,
    onSuccess = requireMethod('onSuccess'),
    onError = requireMethod('onError'),
    errors = [],
    defaultError = ERRORS.undefined,
  }) {
    response.json().then(data => {
      if (this.hasNoError(data)) {
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
};

function requireMethod (methodName) {
  return () => {
    throw new Error(methodName + ' method required');
  };
}

function catchError ({ data, errors = {}, onError, defaultError }) {
  let errorMessage = defaultError;
  for (const [code, message] of errors) {
    if (data.error === code) {
      errorMessage = message;
      break;
    }
  }
  onError(new ErrorMessage(errorMessage));
}
