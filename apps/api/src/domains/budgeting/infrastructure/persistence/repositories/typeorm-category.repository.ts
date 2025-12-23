import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from '@hearth/api/domains/budgeting/domain/entities/category.entity';
import { CategoryRepository } from '@hearth/api/domains/budgeting/domain/repositories/category.repository';
import { CategoryMapper } from '@hearth/api/domains/budgeting/infrastructure/persistence/mappers/category.mapper';
import { CategoryOrmEntity } from '@hearth/api/domains/budgeting/infrastructure/persistence/orm/category.orm-entity';

@Injectable()
export class TypeOrmCategoryRepository extends CategoryRepository {
  constructor(
    @InjectRepository(CategoryOrmEntity)
    private readonly repository: Repository<CategoryOrmEntity>,
  ) {
    super();
  }

  async findAll(): Promise<Category[]> {
    const rows = await this.repository.find();

    return rows.map((row) => CategoryMapper.toDomain(row));
  }

  async save(category: Category): Promise<void> {
    const row = CategoryMapper.toOrm(category);

    await this.repository.save(row);
  }
}
