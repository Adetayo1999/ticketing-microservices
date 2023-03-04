import Joi from "joi";
import { NewUser } from "@types";

export const validateNewUser = (
  user: NewUser
): Joi.ValidationResult<NewUser> => {
  const schema = Joi.object({
    username: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string()
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .messages({
        "string.pattern.base": `"password" should contain at least an uppercase, lowercase and should be between 3 - 30 characters`,
      }),
  });

  return schema.validate(user);
};
