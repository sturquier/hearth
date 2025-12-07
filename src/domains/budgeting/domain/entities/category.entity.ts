import { CategoryId } from '@/src/domains/budgeting/domain/value-objects/category-id.vo';

export class Category {
  constructor(
    readonly id: CategoryId,
    readonly name: string,
  ) {}
}
