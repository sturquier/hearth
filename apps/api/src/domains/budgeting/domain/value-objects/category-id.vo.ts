export class CategoryId {
  private constructor(private readonly id: string) {}

  static create(id: string): CategoryId {
    return new CategoryId(id);
  }

  toString(): string {
    return this.id;
  }
}
