import { ErrorMessage } from 'utils/error-message';
import { ERRORS } from 'utils/macros/errors';
import { logical } from 'vendors/logical';

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
    defaultError = ERRORS.undefined.defaultError,
  }) {
    response.json().then(data => {
      if (this.hasNoError(data)) {
        delete data.error;
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
