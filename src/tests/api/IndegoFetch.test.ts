import request from 'supertest';
import app from '../../index';
import authorization from './helpers';

describe('Indego fetch api', () => {
  test('Should return 401', async (done) => {
    await request(app)
      .post('/api/v1/indego-data-fetch-and-store-it-db')
      .expect(401)
      .then(() => done());
  });

  test('Should return 204', async (done) => {
    await request(app)
      .post('/api/v1/indego-data-fetch-and-store-it-db')
      .set('authorization', authorization)
      .expect(204)
      .then(() => done());
  }, 10000);

  test('Should return 204', async (done) => {
    await request(app)
      .post('/api/v1/indego-data-fetch-and-store-it-db')
      .set('authorization', authorization)
      .expect(204)
      .then(() => done());
  }, 10000);
});
