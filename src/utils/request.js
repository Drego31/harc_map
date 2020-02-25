function makeFetch ({ url, config }) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      ...config,
    })
      .then(resolve)
      .catch(reject)
  })
}

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

    return makeFetch({
      url: fullUrl,
      config: {
        method: 'GET',
        ...config,
      },
    })
  },
  post ({ url = '/', data = {}, config = {} }) {
    const fullUrl = request.host + url
    const body = JSON.stringify(data)

    return makeFetch({
      url: fullUrl,
      config: {
        method: 'POST',
        body,
        ...config,
      },
    })
  },
  put ({ url = '/', data = {}, config = {} }) {
    const fullUrl = request.host + url
    const body = JSON.stringify(data)

    return makeFetch({
      url: fullUrl,
      config: {
        method: 'PUT',
        body,
        ...config,
      },
    })
  },
  delete ({ url = '/', data = {}, config = {} }) {
    const fullUrl = request.host + url
    const body = JSON.stringify(data)

    return makeFetch({
      url: fullUrl,
      config: {
        method: 'DELETE',
        body,
        ...config,
      },
    })
  },
}

window.request = request
