import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateItemType } from './types/item.types';
import { Item } from './models/item.model';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item)
    private readonly itemModule: typeof Item,
  ) {}

  create(newItem: CreateItemType): Promise<Item> {
    return this.itemModule.create({
      ...newItem,
    });
  }

  async findAll(): Promise<Item[]> {
    return this.itemModule.findAll();
  }

  findOne(id: string): Promise<Item> {
    return this.itemModule.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const item = await this.findOne(id);
    await item.destroy();
  }
}
