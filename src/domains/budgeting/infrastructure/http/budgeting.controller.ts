import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CategoryResponseDto } from '@/src/domains/budgeting/application/dtos/category-response.dto';
import { CreateCategoryDto } from '@/src/domains/budgeting/application/dtos/create-category.dto';
import { CreateCategoryUseCase } from '@/src/domains/budgeting/application/use-cases/create-category.uc';
import { ListCategoriesUseCase } from '@/src/domains/budgeting/application/use-cases/list-categories.uc';
import { Category } from '@/src/domains/budgeting/domain/entities/category.entity';
import { API_PATH } from '@/src/shared/config/paths';

@ApiTags('Budgeting')
@Controller()
export class BudgetingController {
  constructor(
    private readonly listCategories: ListCategoriesUseCase,
    private readonly createCategory: CreateCategoryUseCase,
  ) {}

  @ApiOperation({ summary: 'Get categories' })
  @ApiResponse({ status: 200, type: [CategoryResponseDto] })
  @Get(API_PATH.BUDGET_CATEGORIES)
  async getCategories(): Promise<CategoryResponseDto[]> {
    const categories: Category[] = await this.listCategories.execute();

    return categories.map((category) =>
      CategoryResponseDto.fromDomain(category),
    );
  }

  @ApiOperation({ summary: 'Create a new category' })
  @ApiResponse({ status: 201, type: CategoryResponseDto })
  @Post(API_PATH.BUDGET_CATEGORIES)
  async createCategoryApi(
    @Body() dto: CreateCategoryDto,
  ): Promise<CategoryResponseDto> {
    const createdCategory = await this.createCategory.execute(dto);

    return CategoryResponseDto.fromDomain(createdCategory);
  }
}
