import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "appdb",
  "appuser",
  "strongpasswordapp",
  {
    host: "auth-postgres-srv",
    dialect: "postgres",
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Posgres DB Started 🎈");
    await sequelize.sync();
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
