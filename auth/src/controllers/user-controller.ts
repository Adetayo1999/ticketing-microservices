import UserService from "../services/user-service";
import { HTTP_CODES } from "@fingreat/common/build/consts/http";
import { sendResponse } from "@fingreat/common/build/helpers/response";
import { NextFunction, Request, Response } from "express";
import { AuthorizationError } from "@fingreat/common";

export const userController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const user = await UserService.getUserById(request.currentUser!.id);

    if (!user) throw new AuthorizationError();

    sendResponse("Fetched User Successfully", request.currentUser)(
      response,
      HTTP_CODES.SUCCESS
    );
  } catch (error) {
    next(error);
  }
};
