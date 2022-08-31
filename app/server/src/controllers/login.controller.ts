import { Request, Response } from "express";
import LoginService from "../services/login.service";
import { GenericError } from "../utils";

export default class LoginController {
  private service = new LoginService();

  loginSuccess = async (req: Request, res: Response) => {
    try {
      const token = await this.service.isValidLogin(req.body);
      return res.status(200).json({ token });
    } catch (error) {
      const getError = error as GenericError;
      return res.status(getError.status).json({ message: getError.message });
    }
  };

  isValidToken = async (req: Request, res: Response) => {
    try {
      const { authorization } = req.headers;
      const token = authorization as string;
      const validateToken = this.service.validateToken(token);
      return res.status(200).json(validateToken);
    } catch (error) {
      const getError = error as GenericError;
      return res.status(getError.status).json({ message: getError.message });
    }
  };
}
