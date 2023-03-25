import Joi from "joi";
import { NewUser } from "../types";

export const validateNewUser = (
  user: NewUser
): Joi.ValidationResult<NewUser> => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string()
      .required()
      .ruleset.min(8)
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
      .rule({
        message:
          "Password must be strong. At least one upper case alphabet. At least one lower case alphabet. At least one digit. At least one special character. Minimum eight in length",
      }),
  });

  return schema.validate(user);
};
