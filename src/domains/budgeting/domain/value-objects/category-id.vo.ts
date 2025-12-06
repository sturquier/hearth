export class CategoryId {
  private constructor(private readonly id: string) {}

  static create(id: string) {
    return new CategoryId(id);
  }

  toString() {
    return this.id;
  }
}
