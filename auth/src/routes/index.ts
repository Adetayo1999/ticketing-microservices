import { Router } from "express";

const router = Router();

router.get("/currentUser", (_, response) => {
  response.send({ message: "Hello There 🚀" });
});

export default router;
