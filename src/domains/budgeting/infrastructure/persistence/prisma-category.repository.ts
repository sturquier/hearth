import { Injectable } from '@nestjs/common';

import { Category } from '@/src/domains/budgeting/domain/entities/category.entity';
import { CategoryRepository } from '@/src/domains/budgeting/domain/repositories/category.repository';
import { CategoryId } from '@/src/domains/budgeting/domain/value-objects/category-id.vo';
import { PrismaService } from '@/src/shared/infrastructure/prisma/prisma.service';

@Injectable()
export class PrismaCategoryRepository extends CategoryRepository {
  constructor(private readonly prismaService: PrismaService) {
    super();
  }

  async findAll(): Promise<Category[]> {
    const rows = (await this.prismaService.category.findMany()) as {
      id: string;
      name: string;
    }[];

    return rows.map((row) => new Category(CategoryId.create(row.id), row.name));
  }

  async save(category: Category): Promise<void> {
    await this.prismaService.category.upsert({
      create: { id: category.id.toString(), name: category.name },
      where: { id: category.id.toString() },
      update: { name: category.name },
    });
  }
}
