import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './Interface/item.interface';
import { Model } from 'mongoose';
import { ItemSchema } from './schema/item.schema';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('Item') private readonly itemModel: Model<ItemSchema>,
  ) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async deleteOne(id: string): Promise<Item> {
    return await this.itemModel.deleteOne({ _id: id });
  }

  async create(body: Item): Promise<Item> {
    return await this.itemModel.create(body);
  }

  async updateOne(body: Item, id: string): Promise<Item> {
    return await this.itemModel.updateOne({ _id: id }, body);
  }
}
