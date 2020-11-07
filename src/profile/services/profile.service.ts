import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../user/model/user.schema';
import { getRepository, Repository } from 'typeorm';
import { Profile } from '../model/profile.interface';
import { ProfileEntity } from '../model/profile.schema';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly profileRes: Repository<ProfileEntity>,
  ) {}

  async findAll(): Promise<Profile[]> {
    return await this.profileRes.find();
  }

  async create(body: Profile, id: string): Promise<Profile> {
    let userEntity = getRepository(UserEntity);
    let [user, profile] = await Promise.all([
      userEntity.findOne({ id }),
      this.profileRes.save(body),
    ]);
    user.profile = profile;
    await userEntity.save(user);
    return profile;
  }

  async findOne(profileId: string): Promise<Profile> {
    return await this.profileRes.findOne({ id: profileId });
  }

  async updateOne(
    data: Profile,
    profileId: string,
    userId: string,
  ): Promise<any> {
    let userEntity = getRepository(UserEntity);
    let profileEntity = getRepository(ProfileEntity);

    let updataData = await this.profileRes.update(profileId, data);

    let [user, profile] = await Promise.all([
      userEntity.findOne({ id: userId }),
      profileEntity.findOne({ id: profileId }),
    ]);
    user.profile = profile;
    await userEntity.save(user);
    return updataData;
  }

  async deleteOne(profileId: string, userId: string): Promise<any> {
    let userEntity = getRepository(UserEntity);
    let user = await userEntity.findOne({ id: userId });
    user.profile = null;
    await userEntity.save(user);
    return await this.profileRes.delete(profileId);
  }
}
