import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('categories')
export class CategoryOrmEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;
}
