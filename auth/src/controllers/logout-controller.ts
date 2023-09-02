import { HTTP_CODES } from "../common/constants/http-code";
import { sendResponse } from "../common/helpers/createResponse";
import { NextFunction, Request, Response } from "express";

export const logoutController = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    request.session = null;

    sendResponse("Logout Successful", null)(response, HTTP_CODES.SUCCESS);
  } catch (error) {
    next(error);
  }
};
