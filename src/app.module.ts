import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config';
import { ItemsModule } from './items/items.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ItemsModule, UserModule, MongooseModule.forRoot(config.mongoURL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
