import { ApiProperty } from '@nestjs/swagger';

import { Category } from '@/api/domains/budgeting/domain/entities/category.entity';
import { CategoryResponseContract } from '@/packages/contracts/category.contract';

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
