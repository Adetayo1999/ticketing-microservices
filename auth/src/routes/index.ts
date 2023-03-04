import { Express } from "express";
import { currentUserRouter } from "./current-user";
import { signinRouter } from "./signin";
import { signupRouter } from "./signup";
import { logoutRouter } from "./signout";

export const getAllRoutes = (app: Express) => {
  const routes = [currentUserRouter, signinRouter, signupRouter, logoutRouter];
  routes.map((router) => app.use("/api/v1", router));
};
