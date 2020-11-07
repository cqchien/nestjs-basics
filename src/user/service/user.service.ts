import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../model/user.interface';
import { UserEntity } from '../model/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRes: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRes.find({ relations: ['profile'] });
  }

  async create(body: User): Promise<User> {
    return await this.userRes.save(body);
  }

  async findOne(id: string): Promise<User> {
    return await this.userRes.findOne(id, { relations: ['profile'] });
  }

  async updateOne(body: User, id: string): Promise<any> {
    return await this.userRes.update(id, body);
  }

  async deleteOne(id: string): Promise<any> {
    return await this.userRes.delete(id);
  }
}
