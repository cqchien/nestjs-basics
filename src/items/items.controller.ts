import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { from } from 'rxjs';
import {Response, Request} from 'express';
import { CreateItemDTO } from './DTO/create-items.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(@Req()  req:Request, @Res() res:Response ): Response {
    console.log(req.url);
    return res.status(200).send("Hello");
  }

  @Get(':id')
  findOne(@Param() params):string{
    return `Item with id: ${params.id}`
  }

  @Delete(':id')
  deleteOne(@Param('id') id): string{
    return `item :${id} is deleted.`
  }

  @Post()  
  create(@Body() data: CreateItemDTO):string {
    return `${data.name}: with ${data.desc} and ${data.qty}`
  }

  @Put(':id')
  updateOne(@Body() data: CreateItemDTO, @Param('id') id): string{
    return `${id} is updated into ${data.name} with desc: ${data.desc} and ${data.qty}`
  }
}
