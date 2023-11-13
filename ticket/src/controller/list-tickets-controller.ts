import type { Request, Response } from "express";
import { sendResponse } from "@fingreat/common/build/helpers/response";
import { HTTP_CODES } from "@fingreat/common/build/consts/http";
import { Ticket } from "../model/ticket";

export const listAllTicketsController = async (
  _: Request,
  response: Response
) => {
  const tickets = await Ticket.findAll({});

  sendResponse("Successfully fetched tickets", tickets)(
    response,
    HTTP_CODES.SUCCESS
  );
};
