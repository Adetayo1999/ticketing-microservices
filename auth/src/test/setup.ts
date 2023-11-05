import connectDB, { sequelize } from "../database/index";

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await sequelize.close();
});
