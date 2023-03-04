import express from "express";
import cors from "cors";
import logger from "morgan";
import { getAllRoutes } from "./routes";
import { errorHandler } from "./middlewares/error-handler";

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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} ✨🧨`);
});
