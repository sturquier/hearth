import { ApiProperty } from '@nestjs/swagger';

import { Category } from '@hearth/api/domains/budgeting/domain/entities/category.entity';
import type { CategoryResponseContract } from '@hearth/shared-contracts';

export class CategoryResponseDto implements CategoryResponseContract {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  name!: string;

  static fromDomain(category: Category): CategoryResponseDto {
    return {
      id: category.id.toString(),
      name: category.name,
    };
  }
}
