import { GenericError, JWT } from "../utils";
import * as cryptoJs from "crypto-js";

import UsersModel from "../database/models/user.model";
import IUser from "../interfaces/IUser";

const userExists = "User already exists!";

export default class RegisterService {
  private model = UsersModel;
  private jwt = new JWT();

  createNewUser = async (newUser: IUser) => {
    const { email } = newUser;
    const userAlreadyExists = await this.model.findOne({
      where: {
        email,
      },
    });

    if (userAlreadyExists) throw new GenericError(401, userExists);

    const { password, ...userInfo } = newUser;

    const hash = cryptoJs.MD5(password).toString();

    const token = this.jwt.generateToken(userInfo);

    await this.model.create({ password: hash, ...userInfo });

    return {
      userInfo,
      token,
    };
  };
}
