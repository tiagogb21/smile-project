import { Request, Response, NextFunction } from "express";

const allFieldsMessage = "All fields must be filled";
const incorrectMessage = "Incorrect username, email or password";

export default class RegisterMiddleware {
  static isValidName(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void {
    const { name } = req.body;

    if (name.length === 0 || !name) {
      return res.status(400).json({ message: allFieldsMessage });
    }

    if (name.length < 12) {
      return res.status(401).json({ message: incorrectMessage });
    }

    next();
  }

  static isValidEmail(
    req: Request,
    res: Response,
    next: NextFunction
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
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { password } = req.body;

    if (password === "" || !password) {
      return res.status(400).json({ message: allFieldsMessage });
    }

    const validatePassword = password.length > 7;
    if (!validatePassword) {
      return res.status(401).json({ message: incorrectMessage });
    }

    next();
  }
}
