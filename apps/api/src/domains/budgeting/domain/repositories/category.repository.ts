import { Category } from '@/api/domains/budgeting/domain/entities/category.entity';

export abstract class CategoryRepository {
  abstract findAll(): Promise<Category[]>;
  abstract save(category: Category): Promise<void>;
}
