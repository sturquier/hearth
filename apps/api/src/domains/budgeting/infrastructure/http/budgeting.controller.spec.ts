import { Test, TestingModule } from '@nestjs/testing';

import { CreateCategoryUseCase } from '@/api/domains/budgeting/application/use-cases/create-category.uc';
import { ListCategoriesUseCase } from '@/api/domains/budgeting/application/use-cases/list-categories.uc';
import { Category } from '@/api/domains/budgeting/domain/entities/category.entity';
import { CategoryId } from '@/api/domains/budgeting/domain/value-objects/category-id.vo';

import { BudgetingController } from './budgeting.controller';

describe('BudgetingController', () => {
  let controller: BudgetingController;

  const listCategoriesMock = {
    execute: jest.fn(),
  };

  const createCategoryMock = {
    execute: jest.fn(),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [BudgetingController],
      providers: [
        { provide: ListCategoriesUseCase, useValue: listCategoriesMock },
        { provide: CreateCategoryUseCase, useValue: createCategoryMock },
      ],
    }).compile();

    controller = moduleFixture.get(BudgetingController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return categories', async () => {
    const category = new Category(
      CategoryId.create(crypto.randomUUID()),
      'Food',
    );

    listCategoriesMock.execute.mockResolvedValue([category]);

    const result = await controller.getCategories();

    expect(listCategoriesMock.execute).toHaveBeenCalled();
    expect(result[0].name).toBe('Food');
  });

  it('should create a category', async () => {
    const category = new Category(
      CategoryId.create(crypto.randomUUID()),
      'Car',
    );

    createCategoryMock.execute.mockResolvedValue(category);

    const result = await controller.createCategoryApi({ name: 'Car' });

    expect(createCategoryMock.execute).toHaveBeenCalledWith({ name: 'Car' });
    expect(result.name).toBe('Car');
  });
});
