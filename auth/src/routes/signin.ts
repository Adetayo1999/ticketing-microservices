import { Router } from "express";

const router = Router();

router.post("/auth/signin", (_, response) => {
  response.send("Logging In");
});

export { router as signinRouter };
