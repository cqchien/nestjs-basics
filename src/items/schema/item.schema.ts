import { type } from 'os';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemSchema = Item & Document;

@Schema()
export class Item {
  @Prop({ required: true })
  name: String;

  @Prop()
  desc: String;

  @Prop()
  qty: Number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
