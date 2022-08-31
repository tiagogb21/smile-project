import { Request, Response, NextFunction } from "express";

const allFieldsMessage = "All fields must be filled";

export default class ClientMiddleware {
  static isValidClientName(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void {
    const { clientName } = req.body;

    if (!clientName) {
      return res.status(400).json({ message: allFieldsMessage });
    }

    next();
  }

  static isValidGenre(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void {
    const { genre } = req.body;

    if (!genre) {
      return res.status(400).json({ message: allFieldsMessage });
    }

    next();
  }

  static isValidBirthday(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void {
    const { birthday } = req.body;

    if (!birthday) {
      return res.status(400).json({ message: allFieldsMessage });
    }

    next();
  }

  static isValidNaturalness(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void {
    const { naturalness } = req.body;

    if (!naturalness) {
      return res.status(400).json({ message: allFieldsMessage });
    }

    next();
  }

  static isValidProfession(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void {
    const { profession } = req.body;

    if (!profession) {
      return res.status(400).json({ message: allFieldsMessage });
    }

    next();
  }

  static isValidMaritalStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void {
    const { maritalStatus } = req.body;

    if (!maritalStatus) {
      return res.status(400).json({ message: allFieldsMessage });
    }

    next();
  }

  static isValidCellphone(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void {
    const { cellphone } = req.body;

    if (!cellphone) {
      return res.status(400).json({ message: allFieldsMessage });
    }

    next();
  }

  static isValidEmail(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: allFieldsMessage });
    }

    next();
  }
}
