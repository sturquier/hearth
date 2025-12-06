import { CategoryId } from '../value-objects/category-id.vo';

export class Category {
  constructor(
    readonly id: CategoryId,
    readonly name: string,
  ) {}
}
