import { Router } from "express";
import { authorizationHandler } from "../middlewares/authorization-handler";
import { userController } from "../controllers/user-controller";

const router = Router();

router.get("/user", authorizationHandler, userController);

export { router as currentUserRouter };
