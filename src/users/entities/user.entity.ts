import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @Column({ unique: true })
  username: string;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column({})
  password: string;
  @Column()
  createdAt: Date;
  @Column()
  Image: string;
}
