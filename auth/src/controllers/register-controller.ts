import RequestValidationError from "../errors/validation-error";
import { Request, Response, NextFunction } from "express";
import Register from "../services/register-service";
import { validateNewUser } from "../validation/signup-validation";
import { createToken } from "../utils/token";
import { HTTP_CODES } from "../common/constants/http-code";
import { sendResponse } from "../common/helpers/createResponse";

export const registerUserController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { error } = await validateNewUser(request.body);
    if (error) throw new RequestValidationError(error);
    const user = (await Register.register(request.body)).toJSON();
    const access_token = createToken({ email: user.email });

    request.session = {
      jwt: access_token,
    };

    sendResponse("Registration Successful", { user, access_token })(
      response,
      HTTP_CODES.CREATED
    );
  } catch (error) {
    next(error);
  }
};
