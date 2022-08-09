import { Column, Model, NotEmpty, Table } from 'sequelize-typescript';

@Table
export class Item extends Model {
  @NotEmpty
  @Column
  name: string;

  @NotEmpty
  @Column
  imageUrl: string;

  @NotEmpty
  @Column
  section: string;

  @NotEmpty
  @Column
  description: string;

  @Column
  price: string;
}
