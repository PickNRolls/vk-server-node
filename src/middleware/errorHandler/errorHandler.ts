import { Request } from 'express';
import { Response } from 'types/Response';
import { BaseError } from 'errors';

export const errorHandler = (err: BaseError, req: Request, res: Response) => {
  const { statusCode, message } = err;
  res.status(statusCode).jsonApi({
    errors: [{
      status: String(statusCode),
      detail: message,
    }],
  });
};
