import { Router } from "express";
import { listAllTicketsRouter } from "./list-tickets-route";

const routes = [listAllTicketsRouter];

const router = Router();

routes.forEach((route) => router.use("/api/v1/ticket", route));

export default router;
