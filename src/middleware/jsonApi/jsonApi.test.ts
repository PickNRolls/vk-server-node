import { Request, NextFunction } from 'express';
import { Response } from 'types/Response';
import { jsonApi } from './jsonApi';

interface RequestHeadersMock {
  'content-type'?: string;
  accept?: string;
}
interface RequestMock {
  headers: RequestHeadersMock;
}
const mockRequest = (headers: RequestHeadersMock): RequestMock => {
  const req: RequestMock = {
    headers,
  };
  return req;
};

interface ResponseMock {
  jsonApi: (body: any) => void;

  set: jest.Mock<ResponseMock, [string, string | string[] | undefined] | [{
    [field: string]: string | string[];
  }]>;
  status: jest.Mock<ResponseMock, [number]>;
  send: jest.Mock<ResponseMock, [any]>;
  end: jest.Mock<void, []>;
}
const mockResponse = (): ResponseMock => {
  const res = {} as ResponseMock;
  res.set = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  res.end = jest.fn();

  return res;
};

interface NextMock {
  (): void;
}
const mockNext = (): NextMock => jest.fn();

describe('Check JSON:API server responsibilities', () => {
  test('must inject jsonApi function', async () => {
    const req: RequestMock = mockRequest({
      accept: 'application/vnd.api+json',
      'content-type': 'application/vnd.api+json',
    });
    const res: ResponseMock = mockResponse();
    const next: NextMock = mockNext();

    await jsonApi(req as Request, res as unknown as Response, next as NextFunction);
    await res.jsonApi({});

    expect(res.set).toHaveBeenCalledWith('content-type', 'application/vnd.api+json');
    expect(res.send).toHaveBeenCalledWith({});
    expect(next).toHaveBeenCalled();
  });

  test('must 415 if request.Content-Type !== application/vnd.api+json', async () => {
    const req: RequestMock = mockRequest({
      accept: 'application/vnd.api+json',
      'content-type': 'application/json',
    });
    const res: ResponseMock = mockResponse();
    const next: NextMock = mockNext();

    await jsonApi(req as Request, res as unknown as Response, next as NextFunction);

    expect(res.status).toHaveBeenCalledWith(415);
    expect(res.end).toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });

  test('must 406 if request.Accept !== application/vnd.api+json', async () => {
    const req: RequestMock = mockRequest({
      accept: 'application/json',
      'content-type': 'application/vnd.api+json',
    });
    const res: ResponseMock = mockResponse();
    const next: NextMock = mockNext();

    await jsonApi(req as Request, res as unknown as Response, next as NextFunction);

    expect(res.status).toHaveBeenCalledWith(406);
    expect(res.end).toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });

  test('must pass if request.Accept and request.Content-type === application/vnd.api+json', async () => {
    const req: RequestMock = mockRequest({
      accept: 'application/vnd.api+json',
      'content-type': 'application/vnd.api+json',
    });
    const res: ResponseMock = mockResponse();
    const next: NextMock = mockNext();

    await jsonApi(req as Request, res as unknown as Response, next as NextFunction);

    expect(res.status).not.toHaveBeenCalledWith(406);
    expect(res.status).not.toHaveBeenCalledWith(415);
    expect(res.end).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });
});
