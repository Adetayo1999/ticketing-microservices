abstract class BaseCustomError extends Error {
  abstract statusCode: number;

  static error = "error";

  abstract serializeError(): { message: string; status: string };
}

export default BaseCustomError;
