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
    // send - BODY of request
    send: {},
    // expect - BODY of response
    expect: {
      user: null,
      error: 3007,
    },
    // httpStatus - expect http status of response
    httpStatus: 401,
  },
  {
    description: 'Empty body',
    send: null,
    expect: {
      user: null,
      error: 3007,
    },
    httpStatus: 400,
  },
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
];

const casesMapRebuilded = casesMap.map(item => [item.description, item.send, item.httpStatus, item.expect]);

describe('Endpoint /user/login', () => {
  describe('POST', () => {
    test.each(casesMapRebuilded)(`%s: %j\n${spc}Expect: %d | %j`, async (desc, send, httpStatus, response) => {
      let dataToSend;

      try {
        dataToSend = JSON.stringify(send);
      } catch (e) {
        dataToSend = send;
      }

      // Request
      const responseObject = await server.send('/user/login', {
        method: 'POST',
        body: dataToSend,
      });

      // Response
      expect(responseObject.statusCode).toBe(httpStatus);
      expect(responseObject.body).toEqual(response);
    });

    //
    // /**
    //  * @description
    //  * Testing body structure
    //  */
    // test(`For random body data should return: \n${spc}HTTP: 400\n${spc}BODY: { user: null, error: 1001 }`, async () => {
    //   // Request
    //   const response = await server.send('/user/login', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       a: 12345,
    //       b: 'this is random string',
    //       c: null,
    //     }),
    //   });
    //
    //   // Response
    //   expect(response.statusCode).toBe(400);
    //   expect(response.body).toEqual({
    //     user: null,
    //     error: 1001,
    //   });
    // });
    //
    // /**
    //  * @description
    //  * Testing user filed
    //  */
    // test.each([
    //   {
    //     user: null,
    //   },
    //   {
    //     user: { user: 'harc@map.zhp' },
    //   },
    //   {
    //     user: 'harc@map',
    //   },
    //   {
    //     user: 'console.log("a")',
    //   },
    // ])(`For wrong user field: \n${spc}%j \n${spc}in body data, should return: \n${spc}HTTP: 400\n${spc}BODY: { user: null, error: 1001 }`, async (body) => {
    //   // Request
    //   const response = await server.send('/user/login', {
    //     method: 'POST',
    //     body: JSON.stringify(body),
    //   });
    //
    //   // Response
    //   expect(response.statusCode).toBe(400);
    //   expect(response.body).toEqual({
    //     user: null,
    //     error: 1001,
    //   });
    // });
    //
    // /**
    //  * @description
    //  * Testing password filed
    //  */
    // test.each([
    //   {
    //     user: 'harc@map.zhp',
    //     password: null,
    //   },
    // ])(`For wrong password field: \n${spc}%j \n${spc}in body data, should return: \n${spc}HTTP: 400\n${spc}BODY: { user: null, error: 1000 }`, async (body) => {
    //   // Request
    //   const response = await server.send('/user/login', {
    //     method: 'POST',
    //     body: JSON.stringify(body),
    //   });
    //
    //   // Response
    //   expect(response.statusCode).toBe(400);
    //   expect(response.body).toEqual({
    //     user: null,
    //     error: 1000,
    //   });
    // });
    //
    // test.each([
    //   {
    //     user: 'harc@map.zhp',
    //     password: {},
    //   },
    //   {
    //     user: 'harc@map.zhp',
    //     password: 'Abcdabcd',
    //   },
    // ])(`For wrong password field: \n${spc}%j \n${spc}in body data, should return: \n${spc}HTTP: 400\n${spc}BODY: { user: null, error: 1003 }`, async (body) => {
    //   // Request
    //   const response = await server.send('/user/login', {
    //     method: 'POST',
    //     body: JSON.stringify(body),
    //   });
    //
    //   // Response
    //   expect(response.statusCode).toBe(400);
    //   expect(response.body).toEqual({
    //     user: null,
    //     error: 1003,
    //   });
    // });
    //
    // test.each([
    //   {
    //     user: 'harc@map.zhp',
    //     password: 'Abcd123',
    //   },
    // ])(`For wrong password field: \n${spc}%j \n${spc}in body data, should return: \n${spc}HTTP: 400\n${spc}BODY: { user: null, error: 1002 }`, async (body) => {
    //   // Request
    //   const response = await server.send('/user/login', {
    //     method: 'POST',
    //     body: JSON.stringify(body),
    //   });
    //
    //   // Response
    //   expect(response.statusCode).toBe(400);
    //   expect(response.body).toEqual({
    //     user: null,
    //     error: 1002,
    //   });
    // });
    //
    // /**
    //  * @description
    //  * Testing correct user and passowrd
    //  */
    // test.each([
    //   {
    //     user: 'harc@map.zhp1',
    //     password: 'Abcd1234',
    //   },
    // ])(`For correct(validated) user and password field: \n${spc}%j \n${spc}in body data, should return: \n${spc}HTTP: 401\n${spc}BODY: { user: 'harc@map.zhp', error: 3006 }`, async (body) => {
    //   // Request
    //   const response = await server.send('/user/login', {
    //     method: 'POST',
    //     body: JSON.stringify(body),
    //   });
    //
    //   // Response
    //   expect(response.statusCode).toBe(401);
    //   expect(response.body).toEqual({
    //     user: null,
    //     error: 3006,
    //   });
    // });
    //
    // test.each([
    //   {
    //     user: 'harc@map.zhp',
    //     password: 'Abcd1234',
    //   },
    // ])(`For correct(validated) user and password field: \n${spc}%j \n${spc}in body data, should return: \n${spc}HTTP: 401\n${spc}BODY: { user: 'harc@map.zhp', error: 3006 }`, async (body) => {
    //   // Request
    //   const response = await server.send('/user/login', {
    //     method: 'POST',
    //     body: JSON.stringify(body),
    //   });
    //
    //   // Response
    //   expect(response.statusCode).toBe(401);
    //   expect(response.body).toEqual({
    //     user: null,
    //     error: 3006,
    //   });
    // });

  });
});
