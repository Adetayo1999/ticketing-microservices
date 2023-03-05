import { Request } from "express";

export interface NewUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface CustomRequest<P> extends Request {
  body: P;
}
