import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from '../model/user.interface';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userSer: UserService){};

  @Get()
  findAll(): Observable<User[]>{
    return this.userSer.findAll();
  }

  @Post(':profileId')
  create(@Body() data: User, @Param('profileId') profileId): Promise<Observable<User>>{
    return this.userSer.create(data, profileId);
  }
}
