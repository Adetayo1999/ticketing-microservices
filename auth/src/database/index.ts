import { CONFIG_KEYS } from "../common/config";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  CONFIG_KEYS.POSTGRES_DB,
  CONFIG_KEYS.POSTGRES_USER,
  CONFIG_KEYS.POSTGRES_PASSWORD,
  {
    host: CONFIG_KEYS.POSTGRES_HOST,
    dialect: "postgres",
    pool: {
      max: 15,
      min: 5,
      idle: 20000,
      evict: 15000,
      acquire: 30000,
    },
  }
);

const connectDB = async () => {
  await sequelize.authenticate();
  console.log("Posgres DB Started Now 🎈");
  await sequelize.sync({ force: true });
};

export default connectDB;
