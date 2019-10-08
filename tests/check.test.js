const request = require('supertest');
const app = require('../server/index');

test('It adds two numbers', () => {
  expect(1 + 1).toBe(2);
});

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true);
  });
});

describe('GET Endpoint', () => {
  it('should create a new post', async () => {
    const res = await request('http://localhost:3000').get(
      '/api/v1/testcheck',
    );
    expect(res.statusCode).toEqual(200);
    // expect(res.body).toHaveProperty('attachment');
  });
});
