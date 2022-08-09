import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Item } from './models/item.model';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';

@Module({
  imports: [SequelizeModule.forFeature([Item])],
  providers: [ItemsService],
  controllers: [ItemsController],
})
export class ItemsModule {}
