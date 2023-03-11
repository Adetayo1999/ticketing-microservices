import RequestValidationError from "../errors/validation-error";
import { Request, Response, NextFunction } from "express";
import Register from "../services/register-service";
import { validateNewUser } from "../validation/signup-validation";
import { createToken } from "../utils/token";
import { HTTP_CODES } from "../config/http-code";

export const registerUserController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { error } = await validateNewUser(request.body);
    if (error) throw new RequestValidationError(error);
    const newUser = (await Register.register(request.body)).toJSON();
    const access_token = createToken({ email: newUser.email });
    response.status(HTTP_CODES.CREATED).send({
      message: "Registration Successful",
      data: {
        user: newUser,
        access_token,
      },
    });
  } catch (error) {
    next(error);
  }
};
