import { Request, Response } from "express";
import RegisterService from "../services/register.service";
import { GenericError } from "../utils";

export default class RegisterController {
  private service = new RegisterService();

  registerSuccess = async (req: Request, res: Response) => {
    try {
      const newUser = await this.service.createNewUser(req.body);
      return res.status(200).json({ newUser });
    } catch (error) {
      const getError = error as GenericError;
      return res.status(getError.status).json({ message: getError.message });
    }
  };
}
