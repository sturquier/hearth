import { CategoryId } from '@hearth/api/domains/budgeting/domain/value-objects/category-id.vo';

export class Category {
  constructor(
    readonly id: CategoryId,
    readonly name: string,
  ) {}
}
