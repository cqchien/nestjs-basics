import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Profile } from '../model/profile.interface';
import { ProfileService } from '../services/profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileSer: ProfileService) {}

  @Get()
  async findAll(): Promise<Profile[]> {
    return await this.profileSer.findAll();
  }

  @Post(':userId')
  async create(@Body() data: Profile, @Param('userId') id): Promise<Profile> {
    return await this.profileSer.create(data, id);
  }

  @Get(':profileId')
  findOne(@Param('profileId') profileId: string): Promise<Profile> {
    return this.profileSer.findOne(profileId);
  }

  @Put(':userId/:profileId')
  updateOne(
    @Body() data: Profile,
    @Param() params: ['userId', 'profileId'],
  ): Promise<any> {
    return this.profileSer.updateOne(
      data,
      params['profileId'],
      params['userId'],
    );
  }

  @Delete(':userId/:profileId')
  deleteOne(@Param() params: ['userId', 'profileId']): Promise<any> {
    return this.profileSer.deleteOne(params['profileId'], params['userId']);
  }
}
