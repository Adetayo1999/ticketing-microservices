import express from "express";
import cors from "cors";
import logger from "morgan";
import userRouter from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} ✨🚀`);
});
