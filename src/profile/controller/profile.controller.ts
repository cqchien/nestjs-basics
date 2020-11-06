import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Profile } from '../model/profile.interface';
import { ProfileService } from '../services/profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileSer: ProfileService){};

  @Get()
  findAll(): Observable<Profile[]>{
    return this.profileSer.findAll();
  }

  @Post()
  create(@Body() data: Profile):  Observable<Profile>{
    return this.profileSer.create(data);
  }
}
 