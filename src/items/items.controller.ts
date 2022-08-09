import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateItemType } from './types/item.types';
import { Item } from './models/item.model';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() newItem: CreateItemType): Promise<Item> {
    return this.itemsService.create(newItem);
  }

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.itemsService.remove(id);
  }
}
