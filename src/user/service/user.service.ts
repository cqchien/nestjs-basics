import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { ProfileEntity } from '../../profile/model/profile.schema';
import { getRepository, Repository } from 'typeorm';
import { User } from '../model/user.interface';
import { UserEntity } from '../model/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly userRes: Repository<UserEntity> ){};

  findAll(): Observable<User[]>{
    return from(this.userRes.find({relations: ["profile"]})); 
  }

  async create(body: User, proId: string): Promise<Observable<User>>{
    let profileRes = getRepository(ProfileEntity);
    let user = this.userRes.create(body);
    await profileRes.findOne({id: proId}).then((profile) =>{
      user.profile = profile;
    });
    return from(this.userRes.save(user));
  } 
}
