import { Router } from "express";

const router = Router();

router.post("/logout", (_, response) => {
  response.send("Logging out");
});

export { router as logoutRouter };
