const positionOptions = {
  /* Default options from docs */
  enableHighAccuracy: true,
  timeout: 0xFFFFFFFF,
  maximumAge: 0,
};

export const geolocationApi = () => {
  const api = navigator.geolocation;
  let subscribersIds = [];

  const defaultErrorCallback = (err) => console.log(err);
  const defaultSuccessCallback = (opt) => console.log(opt);

  const subscribe = (
    successCallback = defaultSuccessCallback,
    errorCallback = defaultErrorCallback,
    options = positionOptions,
  ) => {
    const id = api.watchPosition(successCallback, errorCallback, options);
    subscribersIds.push(id);
    return { unsubscribe: () => api.clearWatch(id) };
  };

  const unsubscribeAll = () => {
    subscribersIds.forEach(id => {
      api.clearWatch(id);
    });
    subscribersIds = [];
  };

  const getCurrentPosition = (
    successCallback = defaultSuccessCallback,
    errorCallback = defaultErrorCallback,
    options = positionOptions) =>
    api.getCurrentPosition(successCallback, errorCallback, options);

  const getCurrentPositionPromise = (options = positionOptions) =>
    new Promise((resolve, reject) =>
      api.getCurrentPosition(resolve, reject, options));

  const isEnabled = (options = positionOptions) =>
    getCurrentPositionPromise(options)
      .then(true)
      .catch(false);

  return {
    getCurrentPosition,
    getCurrentPositionPromise,
    isEnabled,
    subscribe,
    unsubscribeAll,
  };
};

/*
API ERRORS
PERMISSION_DENIED (numeric value 1)
Request position failed because the user denied permission to use the API.
POSITION_UNAVAILABLE (numeric value 2)
Acquire a position failed.
TIMEOUT (numeric value 3)
The length of time specified by the timeout member has elapsed before the user agent could successfully acquire a position.
*/
