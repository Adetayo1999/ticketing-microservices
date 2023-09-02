import UserService from "../services/user-service";
import { verifyToken } from "../common/helpers/token";
import AuthorizationError from "../errors/authorization-error";
import { NextFunction, Request, Response } from "express";
import { DBUser } from "../models/user";

interface Payload {
  email: string;
  id: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: DBUser;
    }
  }
}

export const authorizationHandler = async (
  request: Request,
  _: Response,
  next: NextFunction
) => {
  if (!request.session?.jwt) {
    throw new AuthorizationError();
  }

  let payload: Payload;

  try {
    payload = verifyToken(request.session.jwt) as Payload;
  } catch (error) {
    throw new AuthorizationError();
  }

  const user = await UserService.getUserById(payload.id);

  if (!user) {
    throw new AuthorizationError();
  }
  request.currentUser = user;

  next();
};
