import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nest',
      password: 'password',
      database: 'nestjs',
      autoLoadModels: true,
      synchronize: true,
    }),
    AppModule,
    UsersModule,
    ItemsModule,
  ],
})
export class AppModule {}
