import { Request, Response, NextFunction } from "express";
import { createToken } from "../common/helpers/token";
import { HTTP_CODES } from "../common/constants/http-code";
import { sendResponse } from "../common/helpers/createResponse";
import UserService from "../services/user-service";
import { BadRequestError } from "../errors/bad-request-error";

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
