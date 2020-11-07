import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'profiles' })
export class ProfileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  photo: string;
}
