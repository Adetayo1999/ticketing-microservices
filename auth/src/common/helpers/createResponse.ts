import { Response } from "express";

export const sendResponse = (message: string, data: any = null) => {
  return (response: Response, code: number) => {
    return response.status(code).send({
      message,
      data,
      status: "success",
    });
  };
};
