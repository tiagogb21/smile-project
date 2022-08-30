import { Request, Response, NextFunction } from "express";

const allFieldsMessage = "All fields must be filled";
const incorrectMessage = "Incorrect role, username, email or password";

export default class RegisterMiddleware {
  static isValidRole(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void {
    const { role } = req.body;

    if (!role) {
      return res.status(400).json({ message: allFieldsMessage });
    }

    next();
  }

  static isValidName(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void {
    const { username } = req.body;

    if (username.length === 0 || !username) {
      return res.status(400).json({ message: allFieldsMessage });
    }

    if (username.length < 12) {
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
