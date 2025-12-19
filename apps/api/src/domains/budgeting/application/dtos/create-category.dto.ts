import { ApiProperty } from '@nestjs/swagger';

import { CreateCategoryContract } from '@/packages/contracts/category.contract';

export class CreateCategoryDto implements CreateCategoryContract {
  @ApiProperty()
  name!: string;
}
