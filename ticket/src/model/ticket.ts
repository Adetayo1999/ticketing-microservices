import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

interface TicketAttributes {
  id?: number;
  title: string;
  price: number;
}

export class Ticket
  extends Model<TicketAttributes>
  implements TicketAttributes
{
  public id!: number;
  public title!: string;
  public price!: number;
}

Ticket.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Ticket",
  }
);

export type DBTicket = typeof Ticket.prototype;
