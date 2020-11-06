import { ProfileEntity } from '../../profile/model/profile.schema';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: 'varchar', length: 200 })
  name: string;

  @Column()
  desc: string;

  @Column({ default: 0 })
  qty: number;

  @OneToOne(() => ProfileEntity)
  @JoinColumn()
  profile: ProfileEntity;
}
