import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Profile } from '../model/profile.interface';
import { ProfileEntity } from '../model/profile.schema';

@Injectable()
export class ProfileService {
  constructor(@InjectRepository(ProfileEntity) private readonly profileRes: Repository<ProfileEntity>){};

  findAll(): Observable<Profile[]>{
    return from(this.profileRes.find());
  }

  create(body: Profile): Observable<Profile>{
    return from(this.profileRes.save(body));
  }
}
