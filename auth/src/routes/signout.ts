import { logoutController } from "../controllers/logout-controller";
import { Router } from "express";

const router = Router();

router.post("/logout", logoutController);

export { router as logoutRouter };
