import { hash, compare } from "bcrypt";

export const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, 10);
  return hashedPassword;
};

export const comparePassword = async (
  hashedPassword: string,
  plainPassword: string
) => {
  const result = await compare(plainPassword, hashedPassword);
  return result;
};
