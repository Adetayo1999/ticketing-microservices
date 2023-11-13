import { Router } from "express";
import { listAllTicketsController } from "../controller";

const router = Router();

router.get("/all", listAllTicketsController);

export { router as listAllTicketsRouter };
