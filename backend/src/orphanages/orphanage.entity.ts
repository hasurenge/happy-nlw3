import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Image } from 'src/orphanages/image.entity';

@Entity()
export class Orphanage extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'decimal',
  })
  latitude: number;

  @Column({
    type: 'decimal',
  })
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column({
    default: false,
  })
  open_at_weekends: boolean;

  @Column()
  opening_hours: string;

  @OneToMany(
    () => Image,
    image => image.orphanage,
    { eager: true, cascade: ['insert', 'update'] },
  )
  @JoinColumn({ name: 'orphanage_id' })
  images: Image[];
}
