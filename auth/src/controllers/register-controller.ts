import { Request, Response, NextFunction } from "express";
import { createToken } from "../common/helpers/token";
import { HTTP_CODES } from "@fingreat/common/build/consts/http";
import { sendResponse } from "@fingreat/common/build/helpers/response";
import UserService from "../services/user-service";
import { BadRequestError } from "@fingreat/common";

export const registerUserController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const existingUser = await UserService.getUserByEmail(request.body.email);

    if (existingUser) throw new BadRequestError("Email in use");

    const newUser = await UserService.createUser(request.body);

    const access_token = createToken({ email: newUser.email, id: newUser.id });

    request.session = {
      jwt: access_token,
    };

    sendResponse("Registration Successful", { user: newUser, access_token })(
      response,
      HTTP_CODES.CREATED
    );
  } catch (error) {
    next(error);
  }
};
