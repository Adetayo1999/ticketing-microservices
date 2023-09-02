import express from "express";
import "express-async-errors";
import cors from "cors";
import logger from "morgan";
import cookieSession from "cookie-session";
import { getAllRoutes } from "../routes";
import { errorHandler } from "../middlewares/error-handler";
import connectDB from "../database";
import { CONFIG_KEYS } from "../common/config";
import { BadRequestError } from "../errors/bad-request-error";

export const createServer = async () => {
  const app = express();

  // middlewares
  app.set("trust proxy", true);
  app.use(express.json());
  app.use(logger("dev"));
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(
    cookieSession({
      secure: true,
      signed: false,
    })
  );

  getAllRoutes(app);

  app.use((_, __, next) => {
    next(new BadRequestError("Invalid Route 🚥"));
  });

  app.use(errorHandler);

  if (Object.values(CONFIG_KEYS).some((env) => env === undefined)) {
    throw new Error("Invalid Configuration");
  }

  await connectDB();

  return app;
};