import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ListCategoriesUseCase } from './application/use-cases/list-categories.uc';
import { BudgetingController } from './infrastructure/http/budgeting.controller';
import { CategoryOrmEntity } from './infrastructure/persistence/orm/category.orm-entity';
import { TypeOrmCategoryRepository } from './infrastructure/persistence/repositories/typeorm-category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryOrmEntity])],
  controllers: [BudgetingController],
  providers: [
    TypeOrmCategoryRepository,
    {
      provide: ListCategoriesUseCase,
      useFactory: (repository: TypeOrmCategoryRepository) =>
        new ListCategoriesUseCase(repository),
      inject: [TypeOrmCategoryRepository],
    },
  ],
})
export class BudgetingModule {}
