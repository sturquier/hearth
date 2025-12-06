import { Category } from '../../domain/entities/category.entity';
import { CategoryRepository } from '../../domain/repositories/category.repository';
import { CategoryId } from '../../domain/value-objects/category-id.vo';
import { CreateCategoryDto } from '../dtos/create-category.dto';

export class CreateCategoryUseCase {
  constructor(private repository: CategoryRepository) {}

  async execute(dto: CreateCategoryDto): Promise<Category> {
    const category = new Category(
      CategoryId.create(crypto.randomUUID()),
      dto.name,
    );

    await this.repository.save(category);

    return category;
  }
}
