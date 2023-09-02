import { HTTP_CODES } from "../common/constants/http-code";
import { sendResponse } from "../common/helpers/createResponse";
import { NextFunction, Request, Response } from "express";

export const userController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    sendResponse("Fetched User Successfully", request.currentUser)(
      response,
      HTTP_CODES.SUCCESS
    );
  } catch (error) {
    next(error);
  }
};
