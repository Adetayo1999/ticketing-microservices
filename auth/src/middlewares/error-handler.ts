import BaseCustomError from "../errors/custom-error";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: Error,
  _: Request,
  response: Response,
  __: NextFunction
) => {
  if (error instanceof BaseCustomError) {
    return response
      .status(error.statusCode)
      .send({ errors: error.serializeError() });
  }

  response.status(500).send(error);
};
