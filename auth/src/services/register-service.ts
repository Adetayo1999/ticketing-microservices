import { hash } from "bcrypt";
import { BadRequestError } from "../errors/bad-request-error";
import { User } from "../models/user";
import { NewUser } from "../types/index";

class Register {
  static async register(user: NewUser) {
    const existingUser = await User.findOne({ where: { email: user.email } });
    if (existingUser) throw new BadRequestError("Email In Use");
    const hashedPassword = await hash(user.password, 10);
    user.password = hashedPassword;
    return await User.create(user);
  }
}

export default Register;
