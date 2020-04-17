const tools = require('../tools');
const { spc, server } = tools;

/**
 * This assertions testing validation issues and can't be used
 * to test more complicated security tests.
 * TODO For do this is necessary to use none-js tool with send raw requests.
 */

const casesMap = [
  {
    // Description in assertion - for easier reading
    description: 'Empty body',
    // send - BODY of request (also array of many BODY to test)
    send: {},
    // expect - BODY of response
    expect: {
      user: null,
      error: 3007,
    },
    // httpStatus - expect http status of response
    httpStatus: 401,
  },
  // TODO Add error handle on server bodyParser
  // {
  //   description: 'Empty body',
  //   send: null,
  //   expect: {
  //     user: null,
  //     error: 3007,
  //   },
  //   httpStatus: 400,
  // },
  {
    description: 'Unknown fields',
    send: {
      a: 12424124241,
      b: 'this is random string',
      c: null,
      d: {},
    },
    expect: {
      user: null,
      error: 1001,
    },
    httpStatus: 400,
  },
  {
    description: 'Wrong user field',
    send: [{
      user: null,
    }, {
      user: { user: 'harc@map.zhp' },
    }, {
      user: 'harc@map',
    }],
    expect: {
      user: null,
      error: 1001,
    },
    httpStatus: 400,
  },
  {
    description: 'Wrong password field',
    send: [{
      user: 'harc@map.zhp',
      password: null,
    }, {
      user: 'harc@map.zhp',
      password: {},
    }],
    expect: {
      user: null,
      error: 1002,
    },
    httpStatus: 400,
  },
  {
    description: 'Too short password field',
    send: [{
      user: 'harc@map.zhp',
      password: 'Abcd123',
    }, {
      user: 'harc@map.zhp',
      password: 'Abcdabc',
    }],
    expect: {
      user: null,
      error: 1002,
    },
    httpStatus: 400,
  },
  {
    description: 'Password has no number field',
    send: {
      user: 'harc@map.zhp',
      password: 'Abcdabcadde',
    },
    expect: {
      user: null,
      error: 1003,
    },
    httpStatus: 400,
  },
  {
    description: 'Correct validation of user and password',
    send: {
      user: 'harc@map.zhp',
      password: 'Abcd1234',
    },
    expect: {
      user: null,
      error: 3006,
    },
    httpStatus: 401,
  },
];

const casesMapRebuilded = casesMap.map(item => [item.description, item.send, item.httpStatus, item.expect]);

describe('Endpoint /user/login', () => {
  describe('POST', () => {
    const spc = '        ';
    test.each(casesMapRebuilded)(`%s: %j\n${spc}Expect: %d | %j`, async (desc, send, httpStatus, response) => {
      const sendArray = Array.isArray(send) ? send : [send];

      for (const data of sendArray) {
        // Request
        const responseObject = await server.send('/user/login', {
          method: 'POST',
          body: JSON.stringify(data),
        });

        // Response
        expect(responseObject.statusCode).toBe(httpStatus);
        expect(responseObject.body).toEqual(response);
      }
    });

  });
});
