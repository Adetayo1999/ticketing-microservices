import { registerUserController } from "../controllers/register-controller";
import { Router } from "express";

const router = Router();

router.post("/signup", registerUserController);

export { router as signupRouter };
