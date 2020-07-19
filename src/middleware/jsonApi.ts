import { Request, NextFunction } from 'express';
import { Response } from 'types/Response'; 

export const jsonApi = (req: Request, res: Response, next: NextFunction) => {
  res.jsonApi = body => {
    res.set('content-type', 'application/vnd.api+json');
    res.send(body);
  };

  if (req.headers['content-type'] !== 'application/vnd.api+json') {
    res.status(415).end();
  }

  if (req.headers['accept'] !== 'application/vnd.api+json') {
    res.status(406).end();
  }

  next();
}
