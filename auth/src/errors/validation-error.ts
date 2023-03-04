import { ValidationError } from "joi";
import BaseCustomError from "./custom-error";

class RequestValidationError extends BaseCustomError {
  statusCode = 400;

  constructor(private errors: ValidationError) {
    super();
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeError() {
    return this.errors.details.map((error) => ({
      reason: error.message,
    }));
  }
}

export default RequestValidationError;
