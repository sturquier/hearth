import { Category } from '@/src/domains/budgeting/domain/entities/category.entity';
import { CategoryId } from '@/src/domains/budgeting/domain/value-objects/category-id.vo';
import { CategoryOrmEntity } from '@/src/domains/budgeting/infrastructure/persistence/orm/category.orm-entity';

export class CategoryMapper {
  static toDomain(raw: CategoryOrmEntity): Category {
    return new Category(CategoryId.create(raw.id), raw.name);
  }

  static toOrm(entity: Category): CategoryOrmEntity {
    const orm = new CategoryOrmEntity();

    orm.id = entity.id.toString();
    orm.name = entity.name;

    return orm;
  }
}
