import express from "express";
import cors from "cors";
import logger from "morgan";
import { getAllRoutes } from "./routes";
import { errorHandler } from "./middlewares/error-handler";
import connectDB from "./database";

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

getAllRoutes(app);

app.use((_, response, next) => {
  response.status(404).send({ message: "Invalid Route" });
});

app.use(errorHandler);

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ✨🧨`);
  });
};

startServer();
