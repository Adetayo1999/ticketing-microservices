import { Request } from "express";

export interface User {
  email: string;
  password: string;
}

export interface NewUser extends User {
  firstName: string;
  lastName: string;
}

export interface CustomRequest<P> extends Request {
  body: P;
}
