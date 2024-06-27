import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table
export class Card extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  amount: number;

  @Column
  limit: number;
}
