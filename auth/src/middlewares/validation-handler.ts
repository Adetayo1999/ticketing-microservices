import RequestValidationError from "../errors/validation-error";
import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export function validationHandler<P = {}>(
  validate: (data: P) => Joi.ValidationResult<P>
) {
  return (request: Request, _: Response, next: NextFunction) => {
    const { error } = validate(request.body);
    if (error) throw new RequestValidationError(error);
    next();
  };
}
