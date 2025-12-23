import { ApiProperty } from '@nestjs/swagger';

import type { CreateCategoryContract } from '@hearth/shared-contracts';

export class CreateCategoryDto implements CreateCategoryContract {
  @ApiProperty()
  name!: string;
}
