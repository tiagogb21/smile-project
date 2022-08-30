import { GenericError } from "../utils";
import UsersModel from "../database/models/user.model";
import IUser from "../interfaces/IUser";

const userExists = "User already exists!";

export default class RegisterService {
  private model = UsersModel;

  createNewUser = async (newUser: IUser) => {
    const { email } = newUser;
    const userAlreadyExists = await this.model.findOne({
      where: {
        email,
      },
    });

    if (userAlreadyExists) throw new GenericError(401, userExists);

    return await this.model.create({ ...newUser });
  };
}
