import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config/index';
import { ItemsModule } from './items/items.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  //imports: [ItemsModule, UserModule, MongooseModule.forRoot(config.mongoURL)],
  imports: [TypeOrmModule.forRoot(), UserModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
