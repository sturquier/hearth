import { Category } from '@/src/domains/budgeting/domain/entities/category.entity';
import { CategoryRepository } from '@/src/domains/budgeting/domain/repositories/category.repository';

export class ListCategoriesUseCase {
  constructor(private readonly repository: CategoryRepository) {}

  async execute(): Promise<Category[]> {
    return await this.repository.findAll();
  }
}
