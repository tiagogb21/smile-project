import {Request, Response, NextFunction} from 'express';
import {JWT} from '../utils';

const invalidToken = 'Token must be a valid token';
const tokenMustBeValid = 'Token must be a valid token';

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {authorization} = req.headers;
  const token = authorization as string;
  const jwt = new JWT();
  const isValidToken = jwt.validateToken(token)

  if(!isValidToken) {
    return res.status(401).json({message: tokenMustBeValid })
  }

  next();
}
