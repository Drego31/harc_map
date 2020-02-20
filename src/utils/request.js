export const request = {
  host: PRODUCTION ? 'https://localhost:3030' : '',
  make ({
    url = '/',
    method = 'GET',
    data = {},
  }) {
    let pathData = ''
    const config = {
      method,
    }

    if (method === 'GET') {
      pathData += '?'
      pathData += Object
        .entries(data)
        .map(([key, val]) => key + '=' + val)
        .join('&')
    }

    if (method !== 'GET') {
      config.body = JSON.stringify(data)
    }

    const fullUrl = request.host + url + pathData

    return new Promise((resolve, reject) => {
      fetch(fullUrl, config)
        .then(resolve)
        .catch(reject)
    })
  },
}

window.request = request
