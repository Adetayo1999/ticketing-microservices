import express from "express";
import cors from "cors";
import logger from "morgan";
import { getAllRoutes } from "./routes";
import { errorHandler } from "./middlewares/error-handler";
import connectDB from "./database";
import { CONFIG_KEYS } from "./common/config";
import { BadRequestError } from "./errors/bad-request-error";

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

getAllRoutes(app);

app.use((_, __, next) => {
  next(new BadRequestError("Invalid Route"));
});

app.use(errorHandler);

const startServer = async () => {
  if (Object.values(CONFIG_KEYS).some((env) => env === undefined)) {
    throw new Error("Invalid Configuration");
  }

  await connectDB();
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ✨🧨`);
  });
};

startServer();
