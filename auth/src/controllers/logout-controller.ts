import { HTTP_CODES } from "@fingreat/common/build/consts/http";
import { sendResponse } from "@fingreat/common/build/helpers/response";
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
