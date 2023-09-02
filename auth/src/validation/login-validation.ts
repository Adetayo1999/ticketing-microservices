import Joi from "joi";
import { User } from "../types";

export const validateLogin = (user: User): Joi.ValidationResult<User> => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  return schema.validate(user);
};
