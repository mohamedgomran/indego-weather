import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

/**
 * Authenticate request using jwt
 * @param req is the express request object
 * @param res is the express response object
 * @param next is the express next function
 */
const auth = (req: Request, res: Response, next: NextFunction) => {
  const { headers: { authorization } } = req;
  jwt.verify(authorization, config.jwtSecret, (err) => {
    if (err) {
      res.status(401).end();
      return;
    }
    next();
  });
};

export default auth;
