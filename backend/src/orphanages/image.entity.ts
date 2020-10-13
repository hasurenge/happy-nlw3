import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Orphanage } from 'src/orphanages/orphanage.entity';

@Entity()
export class Image extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @ManyToOne(
    () => Orphanage,
    orphanage => orphanage.images,
    { eager: false, onUpdate: 'CASCADE', onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage;

  orphanage_id: number;
}
