export const request = {
  host: PRODUCTION ? '' : 'https://localhost:3030',
  dataToPathVariables (data) {
    let pathData = ''

    if (Object.keys(data).length > 0) {
      pathData += '?'
      pathData += Object
        .entries(data)
        .map(([key, val]) => key + '=' + val)
        .join('&')
    }
    return pathData
  },
  get ({ url = '/', data = {}, config = {} }) {
    const pathVariables = request.dataToPathVariables(data)
    const fullUrl = request.host + url + pathVariables

    return new Promise((resolve, reject) => {
      fetch(fullUrl, {
        method: 'GET',
        ...config,
      })
        .then(resolve)
        .catch(reject)
    })
  },
  post ({ url = '/', data = {}, config = {} }) {
    const fullUrl = request.host + url
    const body = JSON.stringify(data)

    return new Promise((resolve, reject) => {
      fetch(fullUrl, {
        method: 'POST',
        body,
        ...config,
      })
        .then(resolve)
        .catch(reject)
    })
  },
}

window.request = request
