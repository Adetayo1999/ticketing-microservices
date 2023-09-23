import { DataTypes, Model } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import { sequelize } from "../database";
import {
  UserAttributes,
  UserTypeWithoutPassword,
} from "../types/db-types/user-type";
import { hashPassword } from "../common/helpers/password";

export class User extends Model<UserAttributes> implements UserAttributes {
  public id!: string;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public password!: string;
  public createdAt!: string;
  public updatedAt!: string;
}

User.init(
  {
    id: {
      type: DataTypes.UUID, // Use UUID data type for the primary key
      defaultValue: () => uuidv4(), // Generate a UUID for new records
      primaryKey: true,
      unique: true,
    },
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
  },
  {
    sequelize,
    tableName: "User",
  }
);

User.prototype.toJSON = function () {
  const user: UserTypeWithoutPassword = { ...this.dataValues };

  delete user.password;
  return user;
};

User.beforeSave(async (user) => {
  // TODO: Remove this logic to prevent raw password from showing in the database logs
  if (user.changed("password")) {
    const hashedPassword = await hashPassword(user.password);
    user.password = hashedPassword;
  }
});

export type DBUser = typeof User.prototype;
