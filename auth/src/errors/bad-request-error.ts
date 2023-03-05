import BaseCustomError from "./custom-error";

export class BadRequestError extends BaseCustomError {
  statusCode = 400;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeError() {
    return [{ reason: this.message }];
  }
}
