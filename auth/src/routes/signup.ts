import { Router } from "express";
import { validateNewUser } from "../validation/signup-validation";
import { CustomRequest, NewUser } from "../types";
import RequestValidationError from "../errors/validation-error";

const router = Router();

router.post(
  "/auth/signup",
  async (request: CustomRequest<NewUser>, response, next) => {
    try {
      const { error } = await validateNewUser(request.body);
      if (error) throw new RequestValidationError(error);
      response.status(200).send({ message: "Hello World" });
    } catch (error) {
      next(error);
    }
  }
);

export { router as signupRouter };
