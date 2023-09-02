import { validationHandler } from "../middlewares/validation-handler";
import { registerUserController } from "../controllers/register-controller";
import { Router } from "express";
import { validateNewUser } from "../validation/signup-validation";

const router = Router();

router.post(
  "/signup",
  validationHandler(validateNewUser),
  registerUserController
);

export { router as signupRouter };
