import express from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError } from "@fingreat/common";
import router from "../routes";

function App() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(morgan("dev"));
  app.use(
    cookieSession({
      secure: true,
      signed: false,
    })
  );

  app.use(router);

  app.all("*", () => {
    throw new NotFoundError();
  });

  app.use(errorHandler);

  return app;
}

export default App;
