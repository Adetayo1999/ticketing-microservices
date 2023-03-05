import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";
import { UserType } from "../types/db-types/user-type";

export const User = sequelize.define<Model<UserType, UserType>>("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
