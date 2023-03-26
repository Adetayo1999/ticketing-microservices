import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "appdb",
  "appuser",
  "strongpasswordapp",
  {
    host: "auth-postgres-srv",
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
  try {
    await sequelize.authenticate();
    console.log("Posgres DB Started Now 🎈");
    await sequelize.sync({ force: true });
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
