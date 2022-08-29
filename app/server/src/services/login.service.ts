import { GenericError, Bcrypt, JWT } from "../utils";
import UsersModel from "../database/models/user.model";
import IUser, { ILogin, ITokenData } from "../interfaces/IUser";

const incorrectMessage = "Incorrect email or password";

export default class LoginService {
  private model = UsersModel;
  private jwt = new JWT();
  private bcrypt = new Bcrypt();

  isValidLogin = async (login: ILogin) => {
    const { password: loginPassword } = login;

    const getUserByEmail = await this.model.findOne({
      where: { email: login.email },
    });

    if (!getUserByEmail) throw new GenericError(401, incorrectMessage);

    const { password, ...userInfo } = getUserByEmail as unknown as IUser;

    const isValidPassword = await this.bcrypt.comparePassword(
      loginPassword,
      password
    );
    if (!isValidPassword) throw new GenericError(401, incorrectMessage);
    return this.jwt.generateToken(userInfo);
  };

  validateToken(token: string) {
    const validToken = this.jwt.validateToken(token);
    const {
      data: {},
    } = validToken as ITokenData;
    return { role: "admin" };
  }
}
