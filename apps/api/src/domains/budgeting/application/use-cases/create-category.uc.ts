import { CreateCategoryDto } from '@hearth/api/domains/budgeting/application/dtos/create-category.dto';
import { Category } from '@hearth/api/domains/budgeting/domain/entities/category.entity';
import { CategoryRepository } from '@hearth/api/domains/budgeting/domain/repositories/category.repository';
import { CategoryId } from '@hearth/api/domains/budgeting/domain/value-objects/category-id.vo';

export class CreateCategoryUseCase {
  constructor(private readonly repository: CategoryRepository) {}

  async execute(dto: CreateCategoryDto): Promise<Category> {
    const category = new Category(
      CategoryId.create(crypto.randomUUID()),
      dto.name,
    );

    await this.repository.save(category);

    return category;
  }
}
