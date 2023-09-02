import { User } from "../models/user";
import { NewUser } from "../types/index";

class UserService {
  static async getUserById(id: string) {
    const user = await User.findByPk(id);
    return user;
  }

  static async getUserByEmail(email: string) {
    const user = await User.findOne({ where: { email } });
    return user;
  }

  static async createUser(user: NewUser) {
    const newUser = await User.create(user);
    return newUser;
  }
}

export default UserService;
