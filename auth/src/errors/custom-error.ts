abstract class BaseCustomError extends Error {
  abstract statusCode: number;

  abstract serializeError(): { reason: string }[];
}

export default BaseCustomError;
