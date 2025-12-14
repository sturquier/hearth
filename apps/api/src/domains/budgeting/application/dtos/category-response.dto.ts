import { ApiProperty } from '@nestjs/swagger';

import { Category } from '@/api/domains/budgeting/domain/entities/category.entity';

export class CategoryResponseDto {
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
