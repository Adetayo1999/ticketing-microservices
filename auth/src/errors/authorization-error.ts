import { HTTP_CODES } from "../common/constants/http-code";
import BaseCustomError from "./custom-error";

class AuthorizationError extends BaseCustomError {
  statusCode = HTTP_CODES.UNAUTHORIZED;

  constructor(public message = "Authorization required") {
    super(message);
    Object.setPrototypeOf(this, AuthorizationError.prototype);
  }

  serializeError() {
    return { message: this.message, status: AuthorizationError.error };
  }
}

export default AuthorizationError;
