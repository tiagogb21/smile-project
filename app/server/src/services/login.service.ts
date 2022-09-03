import { GenericError, Bcrypt, JWT } from "../utils";
import UsersModel from "../database/models/user.model";
import IUser, { ITokenData } from "../interfaces/IUser";

const incorrectMessage = "Incorrect email or password";

export default class LoginService {
  private model = UsersModel;
  private jwt = new JWT();

  isValidLogin = async (login: IUser) => {
    const { email } = login;

    const userInfo = await this.model.findOne({
      where: { email },
      attributes: { exclude: ["password"] },
    });

    if (!userInfo) throw new GenericError(401, incorrectMessage);

    const token = this.jwt.generateToken(userInfo);

    const { dataValues } = userInfo as any;

    return {
      ...dataValues,
      token,
    };
  };

  validateToken(token: string) {
    const validToken = this.jwt.validateToken(token);
    const {
      data: {},
    } = validToken as ITokenData;
    return validToken;
  }
}
