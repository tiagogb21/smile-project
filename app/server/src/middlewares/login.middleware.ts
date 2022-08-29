import { Request, Response, NextFunction } from 'express';
import * as bcryptjs from 'bcryptjs';
import UserModel from '../database/models/user.model';

const allFieldsMessage = 'All fields must be filled';
const incorrectMessage = 'Incorrect email or password';

export default class LoginMiddleware {
  static isValidEmail(
    req:Request,
    res:Response,
    next:NextFunction,
  ): Response | void {
    const { email } = req.body;
    const emailRegex = /\S+@\S+\.\S+/;
    if (email.length === 0 || !email) {
      return res.status(400).json({ message: allFieldsMessage });
    }
    if (!emailRegex.test(email)) {
      return res.status(401).json({ message: incorrectMessage });
    }
    next();
  }

  static async isValidPassword(
    req:Request,
    res:Response,
    next:NextFunction,
  ) {
    const { password, email } = req.body;
    if (password === '' || !password) {
      return res.status(400).json({ message: allFieldsMessage });
    }
    const user = await UserModel.findOne({where: {email} });
    if (user) {
      const validatePassword = await bcryptjs.compare(password, user.password);
      if (!validatePassword) {
        return res.status(401).json({ message: incorrectMessage });
      }
    }
    next();
  }
}
