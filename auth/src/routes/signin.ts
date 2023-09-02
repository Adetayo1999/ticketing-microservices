import { loginUserController } from "../controllers/login-controller";
import { Router } from "express";
import { validationHandler } from "../middlewares/validation-handler";
import { validateLogin } from "../validation/login-validation";

const router = Router();

router.post("/signin", validationHandler(validateLogin), loginUserController);

export { router as signinRouter };
