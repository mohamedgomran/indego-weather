import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../index';
import authorization from './helpers';
import data from './data';

beforeAll(async () => {
  await mongoose.models.Indego.create(data.snapShot);
});

describe('Indego get snapshot data', () => {
  test('Should return 401', async (done) => {
    await request(app)
      .get('/api/v1/stations/000')
      .expect(401)
      .then(() => done());
  });

  test('Should return 200', async (done) => {
    const firstsnapShotData = await mongoose.models.Indego.findOne({});
    // const { kioskId } = firstsnapShotData.stations[0].properties;
    await request(app)
      .get('/api/v1/stations?at=2019-09-01T10:00:00')
      .set('authorization', authorization)
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveProperty('stations');
        expect(body.stations).toHaveLength(firstsnapShotData.stations.length);
        expect(body).toHaveProperty('weather');
        expect(body.weather).toEqual(firstsnapShotData.weather);
        expect(body).toHaveProperty('at');
        expect(new Date(body.at).getTime()).toBeLessThanOrEqual(firstsnapShotData.at.getTime());
        done();
      });
  });

  test('Should return 404', async (done) => {
    await request(app)
      .get('/api/v1/stations/?at=3000-09-01T10:00:00')
      .set('authorization', authorization)
      .expect(404)
      .then(() => done());
  });

  test('Should return 422', async (done) => {
    await request(app)
      .get('/api/v1/stations/a?at=2019-09-01T10:00:00')
      .set('authorization', authorization)
      .expect(422)
      .then(({ body }) => {
        expect(body).toHaveProperty('statusCode', 422);
        expect(body).toHaveProperty('code', 'VALIDATION_ERROR');
        expect(body.details).toEqual(data.invalidKioskIdErrorDetails);
        done();
      });
  });
});
