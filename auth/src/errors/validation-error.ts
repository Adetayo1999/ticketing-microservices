import { ValidationError } from "joi";
import BaseCustomError from "./custom-error";
import { HTTP_CODES } from "../common/constants/http-code";

class RequestValidationError extends BaseCustomError {
  statusCode = HTTP_CODES.BAD_REQUEST;

  constructor(private errors: ValidationError) {
    super();
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeError() {
    return {
      status: RequestValidationError.error,
      message: this.errors.details[0].message,
    };
  }
}

export default RequestValidationError;
