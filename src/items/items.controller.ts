import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { from } from 'rxjs';
import {Response, Request} from 'express';
import { CreateItemDTO } from './DTO/create-items.dto';
import { ItemsService } from './items.service';
import { Item } from './Interface/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService : ItemsService){}

  @Get()
  findAll(): Item[] {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param() params):Item{
    return this.itemService.findOne(params.id);
  }

  @Delete(':id')
  deleteOne(@Param('id') id): Item[] {
    return this.itemService.deleteOne(id);
    
  }

  @Post()  
  create(@Body() data: CreateItemDTO):Item[] {
    return this.itemService.create(data);
  }

  @Put(':id')
  updateOne(@Body() data: CreateItemDTO, @Param('id') id): Item[] {
    return this.itemService.updateOne(data, id);
  }
}
