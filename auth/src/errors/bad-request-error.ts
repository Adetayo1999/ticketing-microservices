import { HTTP_CODES } from "../config/http-code";
import BaseCustomError from "./custom-error";

export class BadRequestError extends BaseCustomError {
  statusCode = HTTP_CODES.BAD_REQUEST;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeError() {
    return [{ reason: this.message }];
  }
}
