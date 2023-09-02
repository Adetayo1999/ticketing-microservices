import { CONFIG_KEYS } from "../config";
import { sign, verify } from "jsonwebtoken";

export const createToken = (payload: any) => {
  return sign(payload, CONFIG_KEYS.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export const verifyToken = (token: string) => {
  return verify(token, CONFIG_KEYS.JWT_SECRET);
};
