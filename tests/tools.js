const https = require('https');

/**
 * @description Parse argument to JSON if it is possible
 * @param body {*}
 * @return {*}
 * @private
 */
function __parseBody (body) {
  let parsedBody;
  try {
    parsedBody = JSON.parse(body);
  } catch (e) {
    parsedBody = body;
  }
  return parsedBody;
}

/**
 * @description Function for testing REST API
 * Send request to given endpoint with headers and data
 * @param path {string}
 * @param config {object}
 * @return {Promise<unknown>}
 */
function send (path, config) {
  return new Promise((resolve) => {
    // Request options
    const options = {
      hostname: 'localhost',
      port: 3030,
      path,
      headers: config.headers || { 'Content-Type': 'application/json' },
      method: config.method,
      rejectUnauthorized: false,
    };
    // Data to send
    const dataToSend = config.body;

    // Request instance
    const request = https.request(options, res => {
      let data = '';

      res.on('data', (dataChunks) => {
        data += dataChunks;
      });

      res.on('end', () => {
        resolve({
          body: __parseBody(data),
          headers: res.headers,
          statusCode: res.statusCode,
        });
      });
    });

    // Handler for request error
    request.on('error', (error) => {
      console.error(error);
      resolve({
        body: null,
        headers: res.headers,
        statusCode: res.statusCode,
      });
    });

    // Send JSON data
    if (dataToSend) request.write(dataToSend);

    request.end();
  });
}

const server = {
  send,
};

const spc = '        ';

module.exports = {
  server,
  spc,
};
