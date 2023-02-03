import { Post } from 'src/post/entities/post.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({})
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({})
  Image: string;
  @Column({})
  username: string;
}
