import { CONFIG_KEYS } from "../config";
import { sign } from "jsonwebtoken";

export const createToken = (payload: any) => {
  return sign(payload, CONFIG_KEYS.JWT_SECRET, {
    expiresIn: "1d",
  });
};
