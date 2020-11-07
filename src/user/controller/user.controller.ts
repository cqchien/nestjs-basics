import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from '../model/user.interface';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userSer: UserService) {}

  @Get()
  async indAll(): Promise<User[]> {
    return await this.userSer.findAll();
  }

  @Post()
  async create(@Body() data: User): Promise<User> {
    return await this.userSer.create(data);
  }

  @Get(':userId')
  async findOne(@Param('userId') id): Promise<User> {
    return await this.userSer.findOne(id);
  }

  @Put(':userId')
  async updateOne(@Body() data: User, @Param('userId') id): Promise<any> {
    return await this.userSer.updateOne(data, id);
  }

  @Delete(':userId')
  async deleteOne(@Param('userId') id): Promise<any> {
    return await this.userSer.deleteOne(id);
  }
}
