import { Module } from '@nestjs/common';

import { ListCategoriesUseCase } from './application/use-cases/list-categories.uc';
import { BudgetingController } from './infrastructure/http/budgeting.controller';
import { PrismaCategoryRepository } from './infrastructure/persistence/prisma-category.repository';

@Module({
  controllers: [BudgetingController],
  providers: [
    PrismaCategoryRepository,
    {
      provide: ListCategoriesUseCase,
      useFactory: (repository: PrismaCategoryRepository) =>
        new ListCategoriesUseCase(repository),
      inject: [PrismaCategoryRepository],
    },
  ],
})
export class BudgetingModule {}
