const server = require('./server');

describe('Endpoint /user/login', () => {
  test('Send POST with empty body should return null user and 3007 error', async () => {
    // Request
    const request = await server.send('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });

    // Response
    expect(request.body).toEqual({
      user: null,
      error: 3007,
    });
  });
});
