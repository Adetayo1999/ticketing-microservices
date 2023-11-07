import { Request, Response, NextFunction } from "express";
import { createToken } from "../common/helpers/token";
import { HTTP_CODES } from "@fingreat/common/build/consts/http";
import { sendResponse } from "@fingreat/common/build/helpers/response";
import UserService from "../services/user-service";
import { BadRequestError } from "@fingreat/common";
import { comparePassword } from "../common/helpers/password";

export const loginUserController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = request.body;

    const existingUser = await UserService.getUserByEmail(email);

    if (!existingUser) throw new BadRequestError("Invalid email or password");

    const passwordMatch = comparePassword(existingUser.password, password);

    if (!passwordMatch) throw new BadRequestError("Invalid email or password");

    const access_token = createToken({
      email: existingUser.email,
      id: existingUser.id,
    });

    request.session = {
      jwt: access_token,
    };

    sendResponse("Login Successful", { user: existingUser, access_token })(
      response,
      HTTP_CODES.SUCCESS
    );
  } catch (error) {
    next(error);
  }
};
