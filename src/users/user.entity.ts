import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// Decorator @Entity() to tell typeorm that this is an entity

// We are creating a User entity with 3 columns: id, name and email

@Entity()
export class User {
  // We are using the decorator @PrimaryGeneratedColumn() to tell TypeORM that this is the primary key of the table
  @PrimaryGeneratedColumn()
  id: number;
  // We are using the decorator @Column() to tell TypeORM that this is a column of the table
  @Column()
  name: string;

  @Column()
  email: string;
}
