import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';

import { AppModule } from '@hearth/api/app.module';
import { API_PATH } from '@hearth/shared-paths';

describe('BudgetingController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return categories', async () => {
    const response = await request(app.getHttpServer())
      .get(API_PATH.BUDGET_CATEGORIES)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should create a category', async () => {
    const response = await request(app.getHttpServer())
      .post(API_PATH.BUDGET_CATEGORIES)
      .send({ name: 'Food' })
      .expect(201);

    expect(response.body).toMatchObject({
      name: 'Food',
    });
  });
});
