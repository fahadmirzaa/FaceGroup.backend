import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('groups')
export class Group {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: number;
  @Column()
  createdAt: Date;
}
