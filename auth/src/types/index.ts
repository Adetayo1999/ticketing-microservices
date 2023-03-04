import { Request } from "express";

export interface NewUser {
  firsName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
}

export interface CustomRequest<P> extends Request {
  body: P;
}
