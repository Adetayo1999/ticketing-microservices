import { Router } from "express";

const router = Router();

router.post("/auth/logout", (_, response) => {
  response.send("Logging out");
});

export { router as logoutRouter };
