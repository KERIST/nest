import { Column, Model, Table, NotEmpty } from 'sequelize-typescript';

@Table
export class User extends Model {
  @NotEmpty
  @Column
  username: string;

  @NotEmpty
  @Column
  email: string;

  @NotEmpty
  @Column
  password: string;

  @NotEmpty
  @Column
  firstName: string;

  @NotEmpty
  @Column
  lastName: string;

  @Column
  cart: string;
}
