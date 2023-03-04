import { Router } from "express";

const router = Router();

router.get("/users/currentuser", (_, response) => {
  response.send("Hello User");
});

export { router as currentUserRouter };
