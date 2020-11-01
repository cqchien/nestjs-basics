import { Injectable } from '@nestjs/common';
import { Item } from './Interface/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      "id" : "1213",
      "name": "Honda",
      "desc": "nam 1931",
      "qty":12
    },
    {
      "id" : "0312",
      "name": "Yamaha",
      "desc": "nam 2003",
      "qty":3
    }
  ]

  findAll(): Item[]{
    return this.items
  }

  findOne(id:string): Item{
    let items = this.items;
    return items.find(o => o.id === id);
  }

  deleteOne(id: string): Item[]{
    let items = this.items;
    let itemIndex = items.findIndex(o => o.id === id);
    items.splice(itemIndex, 1);
    return items;
  }

  create(body: Item):Item[] {
     this.items.push(body);
     return this.items;
  }

  updateOne(body: Item, id: string): Item[] {
    let items = this.items;
    let itemIndex = items.findIndex(o => o.id === id);
    items.splice(itemIndex, 1 , body);
    return items;
  }
}
