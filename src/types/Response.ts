import { Response as ExpressResponse } from 'express';
import { Links } from './jsonApi/Links';
import { TopLevelPrimaryData } from './jsonApi/TopLevelPrimaryData';
import { JsonApi } from './jsonApi/JsonApi';
import { ResourceObject } from './jsonApi/ResourceObject';
import { ErrorObject } from './jsonApi/ErrorObject';

export interface JsonApiInjection {
  (topLevel: {
    data: TopLevelPrimaryData,
    meta?: object,
    jsonapi?: JsonApi,
    links?: Links,
    included?: ResourceObject[],
  }): void;

  (topLevel: {
    errors: ErrorObject[],
    meta?: object,
    jsonapi?: JsonApi,
    links?: Links,
  }): void;

  (topLevel: {
    errors?: ErrorObject[],
    meta: object,
    jsonapi?: JsonApi,
    links?: Links,
  }): void;

  (topLevel: {
    data: TopLevelPrimaryData,
    meta: object,
    jsonapi?: JsonApi,
    links?: Links,
    included?: ResourceObject[],
  }): void;
};

export interface Response extends ExpressResponse {
  jsonApi: JsonApiInjection;
}
