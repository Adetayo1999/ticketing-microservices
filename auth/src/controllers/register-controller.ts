import RequestValidationError from "../errors/validation-error";
import { Request, Response, NextFunction } from "express";
import Register from "../services/register-service";
import { validateNewUser } from "../validation/signup-validation";

export const registerUserController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { error } = await validateNewUser(request.body);
    if (error) throw new RequestValidationError(error);
    const newUser = await Register.register(request.body);

    response.status(201).send({
      message: "Registration Successful",
      data: newUser.toJSON(),
    });
  } catch (error) {
    next(error);
  }
};
