import { Controller, Get } from '@nestjs/common';

import { ListCategoriesUseCase } from '@/src/domains/budgeting/application/use-cases/list-categories.uc';

@Controller('budget')
export class BudgetingController {
  constructor(private readonly listCategories: ListCategoriesUseCase) {}

  @Get('categories')
  async getCategories() {
    const categories = await this.listCategories.execute();

    return categories;
  }
}
